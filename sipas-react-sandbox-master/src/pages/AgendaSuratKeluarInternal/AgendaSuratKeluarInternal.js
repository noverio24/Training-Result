import React, {useState, useEffect} from 'react'
// import { Card, Row, Col } from 'antd';
// import { Link } from 'react-router-dom';
import './AgendaSuratKeluarInternal.scss';
import AgendaSuratKeluarInternalView from './AgendaSuratKeluarInternalView';
import AgendaSuratKeluarInternalDetail from './AgendaSuratKeluarInternalDetail';

import axios from 'axios';

const AgendaSuratKeluarInternal = props => {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadData = () => {
        setLoading(true);
        axios
			.get('http://www.json-generator.com/api/json/get/cgvZeOnPnm?indent=2', {
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
    }

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
    
    return(
        <AgendaSuratKeluarInternalView 
            {...props}
			loading={loading}
			dataSource={dataSource}
			rowKey={'id'}
			handleRow={handleRow}
			handleReload={handleReload}
			handleCreate={handleCreate}
			handleChangeSource={handleChangeSource}
			handleQuery={handleQuery}
			detailView={AgendaSuratKeluarInternalDetail}
        />
    )
}

export default AgendaSuratKeluarInternal;