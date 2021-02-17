import { Record } from 'immutable';
import { generate as generateShortId } from 'shortid';
import axios from 'axios';

/**
 * Todo: add desc
 */
const DataRecord = (data, recordName, config?: Object = {}) => {
	const defaultConfig = {
		/**
		 * field of record
		 */
		idProperty: 'id'
	}

	return class extends Record({
		...data
	}, config && config.name) {
		static getConfig(...args) {
			if(!args.length){
				return {
					...defaultConfig,
					...config
				}
			}else{
				const key = args[0]
				if (config.hasOwnProperty(key)) {
					return config[key];
				}
			}
		}

		static getUserConfig() {
			return {
				...config
			};
		}

		static getFields() {
			return Object.keys(data);
		}

		// ids

		static getIdProperty(): string {
			return this.getConfig('idProperty');
		}

		hasId(): boolean {
			return this.has(this.constructor.getIdProperty());
		}

		getId(): string {
			return this.get(this.constructor.getIdProperty());
		}

		setId(newId): string {
			return this.set(this.constructor.getIdProperty(), newId);
		}

		// data
		getData(): Object {
			return this.toJS();
		}
	};
};

/**
 * DataProxy core function factory will be used by proxy factories.
 * DataProxy basic ability is to read/save/destroy record on server, just like active records.
 * 
 */
const DataProxy = (config = {}, proto? = {}) => {

	const defaultConfig = {

	};

	const proxyUrl = ProxyUrl(config.url);

	const getConfig = (...args) => {
		if(!args.length){
			return {
				...defaultConfig,
				...config
			}
		}else{
			const key = args[0]
			if (config.hasOwnProperty(key)) {
				return config[key];
			}
		}
	};

	const getUserConfig = () => {
		return {
			...config
		};
	}

	const getModel = () => {
		return config.model;
	}

	const getSourceMap = (field: string): string => {
		const source = getConfig('sourceMap') || {};
		if(source.hasOwnProperty(field))
		{
			return source[field];
		}
		return field;
	}

	const readData = (rawData: Object = {}) => {
		const data = {};
		getModel().getFields().forEach(field => {
			data[field] = rawData[getSourceMap(field)];
		})
		return data;
	}

	const writeData = (data: Object = {}) => {
		const rawData = {}
		getModel().getFields().forEach(field => {
			rawData[getSourceMap(field)] = data[field]; 
		})
		return rawData;
	}

	const catchError = e => {
		console.error(e)
	}

	return function(record?: model) {
		let proxyRecord = record;	
		const getRecord = () => {
			return proxyRecord;
		}
		const setRecord = r => {
			proxyRecord = r;
		}

		const self = {
			// statics
			getConfig,
			getUserConfig,
			getModel,
			getSourceMap,
			readData,

			// instance
			getRecord,
			setRecord,
			with(record: DataRecord) {
				proxyRecord = record;
				return this;
			},
			load(id: string|object, callback?: callable) {
				const model = getModel();
				const data = ('object' == typeof id) ? id : {id: id};
				const url = proxyUrl.getUrl('read', {
					action: 'read',
					...data
				})

				axios({
					method: url.method,
					url: url.path,
				}).then(response => {
					const mappedData = readData(response.data);
					proxyRecord = new model(mappedData);
					callFunction(self.getRecord(), [self])
				}).catch(catchError);
			},
			save(callback?: callable) {
				const model = getModel();
				const record = self.getRecord();
				const id = record.getId();
				const data = writeData(record.getData())
				const url = proxyUrl.getUrl(record.hasId() ? 'update' : 'create', {
					action: record.hasId() ? 'update' : 'create',
					id,
					...data
				})
				axios({
					method: url.method,
					url: url.path,
					data: data
				}).then(response => {
					const mappedData = readData(response.data);
					proxyRecord = new model(mappedData);
					callFunction(callback, self.getRecord(), [self])
				}).catch(catchError);
			},
			destroy(callback?: callable) {
				const model = getModel();
				const record = self.getRecord();
				const id = record.getId();
				const data = writeData(record.getData())
				const url = proxyUrl.getUrl('update', {
					action: 'update',
					id,
					...data
				})
				axios({
					method: url.method,
					url: url.path,
					data: data
				}).then(response => {
					const mappedData = readData(response.data);
					proxyRecord = new model(mappedData);
					callFunction(callback, self.getRecord(), [self])
				}).catch(catchError);
			},
			...proto
		};

		return self;
	}
};

const ProxyUrl = (url: string|Object|Function) => {
	let readUrl, 
		createUrl, 
		updateUrl, 
		destroyUrl;

	const parseUrl = (u) => {
		let returnedUrl = {
			method:'GET',
			path: ''
		}
		if('string' == typeof u)
		{
			if(u.split(' ').length >=2)
			{
				const _methodUrl = u.split(' ')[0].toUpperCase();
				const _pathUrl = u.substring(_methodUrl.length, u.length).trim();
				return Object.assign(returnedUrl, {
					method: _methodUrl,
					path: _pathUrl
				})
			}else{
				return Object.assign(returnedUrl, {
					path: u
				})
			}
		}else if('object' == typeof u) {
			return Object.assign(returnedUrl, {
				method: (u[0] || u.method).toUpperCase(),
				path: (u[1] || u.url)
			})
		}else if('function' == typeof u) {
			return Object.assign(returnedUrl, {
				path: u
			})
		}else {
			return returnedUrl;
		}
	}

	const getUrl = (urlType, data) => {
		let url = {};
		switch (urlType) {
			case 'read': url = Object.assign(url, readUrl); break;		
			case 'create': url = Object.assign(url, createUrl); break;
			case 'update': url = Object.assign(url, updateUrl); break;		
			case 'destory': url = Object.assign(url, destroyUrl); break;		
			default: url = Object.assign(url, readUrl); break;
		}

		if('string' == typeof url.path)
		{
			let str = url.path;
			const re = /(?<=\{).*?(?=\})/g;
			const keys = url.path.match(re);

			keys && keys.forEach(key => {
				str = str.replace(`{${key}}`, data[key] || "");
			});
			url.path = str;
			return url;
		}
		else if('function' == typeof url.path)
		{
			const returned = url.path(urlType, data);

			if('string' == typeof returned)
			{
				url.path = returned;
			}
			if('object' == typeof returned)
			{
				Object.assign(url, returned)
			}
			return url;
		}
	}

	switch(typeof url)
	{
		case 'object':
			readUrl = parseUrl(url.read);
			createUrl = parseUrl(url.create);
			updateUrl = parseUrl(url.update);
			destroyUrl = parseUrl(url.destroy);
			break;
		case 'string': 
		case 'function': 
			readUrl = createUrl = updateUrl = destroyUrl = parseUrl(url);
			break;
		default:
			readUrl = createUrl = updateUrl = destroyUrl = ['GET', null];
	}

	return {
		readUrl: readUrl,
		createUrl: createUrl,
		updateUrl: updateUrl,
		destroyUrl: destroyUrl,
		getUrl,
	}
}

const callFunction = (fn, scope, args) => (('function' == typeof fn) && fn.apply(scope, args));

export default Record;

export { 
	DataRecord, 
	DataProxy, 
	ProxyUrl,
	generateShortId 
};
