import React, { useState, useEffect } from 'react';
import TugasView from './TugasView';
import TugasDetail from './TugasDetail';
import axios from 'axios';

const Tugas = props => {
	const [dataSource, setDataSource] = useState([]);
	const [loading, setLoading] = useState(false);

	const loadData = () => {
		console.log('requesting');
		setLoading(true);
		axios
			.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_page: 1,
					_limit: 10
					// _sort: votes,
					// _order:'asc'
				}
			})
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
		alert('create a Tugas');
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<TugasView
			{...props}
			loading={loading}
			dataSource={dataSource}
			rowKey={'id'}
			handleRow={handleRow}
			handleReload={handleReload}
			handleCreate={handleCreate}
			handleChangeSource={handleChangeSource}
			handleQuery={handleQuery}
			detailView={TugasDetail}>
		</TugasView>
	);
};

export default Tugas;
