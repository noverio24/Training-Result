import React, { useState, useEffect } from 'react';
import AsistenView from './AsistenView';
import AsistenDetail from './AsistenDetail';
import axios from 'axios';

const Asisten = props => {
	const [dataSource, setDataSource] = useState([]);
	const [loading, setLoading] = useState(false);

	const loadData = () => {
		console.log('requesting');
		setLoading(true);
		axios
			.get('http://192.168.100.21/dataAgendaSuratMasuk.json')
			.then(function({ data, status }) {
				setDataSource(data);
			})
			.catch(function(error) {
				console.log(error);
			})
			.then(function() {
				setLoading(false);
			});
	};

	const handleRow = (record, rowIndex) => {
		return {
			onClick: event => {
				console.log(record);
				alert('click');
			},
			onDoubleClick: event => {},
			onContextMenu: event => {}
		};
	};

	const handleReload = () => {
		console.log('reloading');
		loadData();
	};

	const handleChangeSource = () => {
		console.log('change datasource');
		loadData();
	};

	const handleQuery = keyword => {
		console.log('querying');
		loadData();
	};

	const handleCreate = () => {
		alert('create a post');
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<AsistenView
			{...props}
			loading={loading}
			dataSource={dataSource}
			rowKey={'id'}
			handleRow={handleRow}
			handleReload={handleReload}
			handleCreate={handleCreate}
			handleChangeSource={handleChangeSource}
			handleQuery={handleQuery}
			detailView={AsistenDetail}>
		</AsistenView>
	);
};

export default Asisten;
