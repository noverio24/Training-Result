// @flow
import { validateUser } from 'system/Api';

const parseTokenData = t => {
	t = atob(t.split('.')[1]);
	try {
		const parsed = JSON.parse(t);
		return parsed;
	} catch (e) {
		console.log('eeror parsing json');
	}
};

const Authenticator = (function() {
	const authenticate = async (
		username: string,
		password: string,
		callback: (token: string, data: {}) => void,
		fallback: () => void
	) => {
		if ('undefined' === typeof callback) {
			const func = authenticate;
			return new Promise((resolve, reject) => {
				func(username, password, resolve, reject);
			});
		}

		callback = callback || (() => {});
		fallback = fallback || (() => {});

		// we use async for mocking server request
		// const passed = await new Promise(r => setTimeout(r, 1000)).then(() => username.length >= 3);

		validateUser({ username, password })
			.then(function({ data, message }) {
				if (data.success === true) {
					const tokenData = parseTokenData(data.token);
					callback({
						token: data.token,
						data: tokenData,
					});
				} else {
					fallback({
						message: message,
					});
				}
			})
			.catch(function(error) {
				fallback({
					message: 'Unable to sign in',
				});
			});
	};

	const terminate = async (callback, fallback) => {
		if ('undefined' === typeof callback) {
			const func = terminate;
			return new Promise((resolve, reject) => {
				func(resolve, reject);
			});
		}

		callback = callback || (() => {});
		fallback = fallback || (() => {});

		if (true) {
			callback({
				message: 'Goodbye',
			});
		} else {
			fallback({
				message: 'Server is bussy, please try again later',
			});
		}
	};

	return {
		authenticate,
		auth: authenticate,
		check: authenticate,
		terminate,
		signout: terminate,
	};
})();

export default Authenticator;
