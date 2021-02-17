import React, { useState } from 'react';
import JenisView from './JenisView';

const Jenis = () => {
	const [filteredInfo, setFilter] = useState(null);
	const [sortedInfo, setSorter] = useState(null);

	const columns = [
		{
			title: 'Nama Jenis',
			dataIndex: 'nama_jenis',
			key: 'nama_jenis',
			filters: [
				{ text: 'Joe', value: 'Joe' },
				{ text: 'Jim', value: 'Jim' }
			],
			filteredValue: (filteredInfo || {}).nama_jenis || null,
			onFilter: (value, record) => record.nama_jenis.includes(value),
			sorter: (a, b) => a.nama_jenis.length - b.nama_jenis.length,
			sortOrder: (sortedInfo || {}).columnKey === 'name' && (sortedInfo || {}).order,
			ellipsis: true
		},
		{
			title: 'Kode Jenis',
			dataIndex: 'kode_jenis',
			key: 'kode_jenis',
			sorter: (a, b) => a.kode_jenis - b.kode_jenis,
			sortOrder: (sortedInfo || {}).columnKey === 'kode_jenis' && (sortedInfo || {}).order,
			ellipsis: true
		},
		{
			title: 'Penomoran',
			dataIndex: 'penomoran',
			key: 'penomoran',
			filters: [
				{ text: 'London', value: 'London' },
				{ text: 'New York', value: 'New York' }
			],
			filteredValue: (filteredInfo || {}).penomoran || null,
			onFilter: (value, record) => record.penomoran.includes(value),
			sorter: (a, b) => a.penomoran.length - b.penomoran.length,
			sortOrder: (sortedInfo || {}).columnKey === 'penomoran' && (sortedInfo || {}).order,
			ellipsis: true
		},
		{
			title: 'Format Penomoran',
			dataIndex: 'format_penomoran',
			key: 'format_penomoran',
			filters: [
				{ text: 'London', value: 'London' },
				{ text: 'New York', value: 'New York' }
			],
			filteredValue: (filteredInfo || {}).format_penomoran || null,
			onFilter: (value, record) => record.format_penomoran.includes(value),
			sorter: (a, b) => a.format_penomoran.length - b.format_penomoran.length,
			sortOrder: (sortedInfo || {}).columnKey === 'format_penomoran' && (sortedInfo || {}).order,
			ellipsis: true
		},
		{
			title: 'Gunakan Penomoran Awal',
			dataIndex: 'guanakan_penomoran_awal',
			key: 'gunakan_penomoran_awal',
			filters: [
				{ text: 'London', value: 'London' },
				{ text: 'New York', value: 'New York' }
			],
			filteredValue: (filteredInfo || {}).gunakan_penomoran_awal || null,
			onFilter: (value, record) => record.gunakan_penomoran_awal.includes(value),
			sorter: (a, b) => a.gunakan_penomoran_awal.length - b.gunakan_penomoran_awal.length,
			sortOrder: (sortedInfo || {}).columnKey === 'gunakan_penomoran_awal' && (sortedInfo || {}).order,
			ellipsis: true
		}
	];

	const data = [
		{
			key: '1',
			nama_jenis: 'John Brown',
			kode_jenis: 32,
			penomoran: 'New York No. 1 Lake Park'
		},
		{
			key: '2',
			nama_jenis: 'Jim Green',
			kode_jenis: 42,
			penomoran: 'London No. 1 Lake Park'
		},
		{
			key: '3',
			nama_jenis: 'Joe Black',
			kode_jenis: 30,
			penomoran: 'Sidney No. 1 Lake Park'
		},
		{
			key: '4',
			nama_jenis: 'Jim Red',
			kode_jenis: 29,
			penomoran: 'London No. 2 Lake Park'
		}
	];

	const handleChange = (pagination, filters, sorter) => {
		console.log('Various parameters', pagination, filters, sorter);
		setFilter(filters);
		setSorter(sorter);
	};

	const clearFilters = () => {
		setFilter(null);
	};

	const clearAll = () => {
		setFilter(null);
		setSorter(null);
	};

	const setkode_jenisSort = () => {
		setSorter({
			order: 'descend',
			columnKey: 'kode_jenis'
		});
	};

	return (
		<JenisView
			setkode_jenisSort={setkode_jenisSort}
			clearFilters={clearFilters}
			clearAll={clearAll}
			columns={columns}
			data={data}
			handleChange={handleChange}
		/>
	);
};

export default Jenis;
