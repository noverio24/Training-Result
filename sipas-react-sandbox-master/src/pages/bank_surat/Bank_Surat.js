import React, { useState, useEffect } from 'react';
import BankSuratView from './BankSuratView';
import axios from 'axios';

const BankSurat = props => {
	const [dataSource, setDataSource] = useState([]);
	const [loading, setLoading] = useState(false);

	const loadData = () => {
		console.log('requesting');
		setLoading(true);
		axios
			.get('http://www.json-generator.com/api/json/get/cfofANUcZe?indent=2')
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
		<BankSuratView
			{...props}
			loading={loading}
			dataSource={dataSource}
			rowKey={'id'}
			handleRow={handleRow}
			handleReload={handleReload}
			handleCreate={handleCreate}
			handleChangeSource={handleChangeSource}
			handleQuery={handleQuery}>
			{/* // detailView={BankSuratDetail}> */}
		</BankSuratView>
	);
};

export default BankSurat;
