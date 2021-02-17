// @flow
import React, { useState, useCallback, Node } from 'react';
import { Table, Button, Input, Select, Row, Col, Drawer, Avatar, Badge } from 'antd';
import { ReadOutlined, ReloadOutlined, MailOutlined } from '@ant-design/icons';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Page } from 'viewport';
import Helmet from 'react-helmet';
import './AgendaSuratMasukInternalView.scss';

function onChange(pagination, filters, sorter, extra) {
	console.log('params', pagination, filters, sorter, extra);
  }

const data = [
	{
		"jenis_surat": "Masuk Internal", 
		"status": "Belum Terbaca", 
		"nomor_surat": "055/DKA/06/2019", 
		"from": "Bapak Kepala Dinas", 
		"tanggal_terima": "hari ini", 
		"type_surat": "UM Umum", 
		"judul_surat": "Kerjasama antar vendor", 
		"berkas": "-", 
		"tembusan": "-", 
		"id": 1, 
		"icon": "https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg"
	  }, 
	  {
		"jenis_surat": "Masuk Internal", 
		"status": "Belum Terbaca", 
		"nomor_surat": "055/DKA/06/2019", 
		"from": "Bapak Kepala Dinas", 
		"tanggal_terima": "hari ini", 
		"type_surat": "UM Umum", 
		"judul_surat": "Kerjasama antar vendor", 
		"berkas": "-", 
		"tembusan": "-", 
		"id": 2, 
		"icon": "https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg"
	  }, 
	  {
		"jenis_surat": "Masuk Internal", 
		"status": "Sudah Terbaca", 
		"nomor_surat": "055/DKA/06/2019", 
		"from": "Bapak Kepala Dinas", 
		"tanggal_terima": "hari ini", 
		"type_surat": "UM Umum", 
		"judul_surat": "Kerjasama antar vendor", 
		"berkas": "-", 
		"tembusan": "-", 
		"id": 3, 
		"icon": "https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg"
	  }, 
	  {
		"jenis_surat": "Masuk Internal", 
		"status": "Belum Terbaca", 
		"nomor_surat": "055/DKA/06/2019", 
		"from": "Bapak Kepala Dinas", 
		"tanggal_terima": "hari ini", 
		"type_surat": "UM Umum", 
		"judul_surat": "Kerjasama antar vendor", 
		"berkas": "-", 
		"tembusan": "-", 
		"id": 4, 
		"icon": "https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg"
	  }, 
	  {
		"jenis_surat": "Masuk Internal", 
		"status": "Sudah Terbaca", 
		"nomor_surat": "055/DKA/06/2019", 
		"from": "Bapak Kepala Dinas", 
		"tanggal_terima": "hari ini", 
		"type_surat": "UM Umum", 
		"judul_surat": "Kerjasama antar vendor", 
		"berkas": "-", 
		"tembusan": "-", 
		"id": 5, 
		"icon": "https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg"
	  }, 
	  {
		"jenis_surat": "Masuk Internal", 
		"status": "Sudah Terbaca", 
		"nomor_surat": "055/DKA/06/2019", 
		"from": "Bapak Kepala Dinas", 
		"tanggal_terima": "hari ini", 
		"type_surat": "UM Umum", 
		"judul_surat": "Kerjasama antar vendor", 
		"berkas": "-", 
		"tembusan": "-", 
		"id": 6, 
		"icon": "https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg"
	  }
	]

const columns = [
	{
		key: 'type_surat',
		title: 'Tipe Surat',
		dataIndex: 'type_surat',
		ellipsis: true,
		render: (text, record) => (
			<div>
				<h3>{record.type_surat}</h3>
				<h5>{record.jenis_surat}</h5>
			</div>
		)
	},
	{
		key: 'surat',
		title: 'Surat',
		dataIndex: 'surat',
		ellipsis: true,
		render: (text, record) => (
			// <div>
			<Row>
				<Col span={6}>
					<Badge dot offset={[-51,7]}>
					<Avatar size={60} src={record.icon}></Avatar>
					</Badge>
				</Col>
				<Col span={18}>
					<h4>{record.judul_surat}</h4>
					<h4>{record.from}</h4>
					<h5>{record.nomor_surat}</h5>
				</Col>
			</Row>
			// </div>
		),
	},
	{
		key: 'status',
		title: 'Status',
		dataIndex: 'status',
		onFilter: (value, record) => record.status.indexOf(value) === 0,
		sorter: (a, b) => a.status.length - b.status.length,
		sortDirections: ['descend', 'ascend'],
		render: (text, record) => (
			<div>
				{record.status == "Belum Terbaca" ?
				<h4 style={{color: "green"}}><MailOutlined /> {record.status}</h4>
				:
				<span><MailOutlined /> {record.status}</span>
				}
			</div>
		)
	},
	{
		key: 'tembusan',
		title: 'Tembusan',
		dataIndex: 'tembusan',
		ellipsis: true,
	},
	{
		key: 'berkas',
		title: 'Berkas',
		dataIndex: 'berkas',
		ellipsis: true,
	},
	{
		key: 'tanggal_terima',
		title: 'Tgl.Terima',
		dataIndex: 'tanggal_terima',
		ellipsis: true,
	},
]

type Props = {
	loading: boolean,
	dataSource: Array,
	rowKey: string,

	handleReload: () => void,
	handleCreate: () => void,
	handleChangeSource: () => void,
	handleQuery: () => void,

	detailView: Node,
};

const AgendaSuratMasukInternalView = ({
	loading,
	dataSource,
	rowKey,

	handleReload,
	handleCreate,
	handleChangeSource,
	handleQuery,

	detailView,
	children,
}: Props) => {
	const DetailComponent = detailView;

	const [detailPaneIsVisible, setDetailPaneVisibility] = useState();
	const showDrawer = useCallback(() => {
		setDetailPaneVisibility(true);
	}, []);
	const closeDrawer = useCallback(() => {
		setDetailPaneVisibility(false);
	}, []);

	const [selectedRecord, setSelectedRecord] = useState();
	const handleRow = useCallback(
		(record, rowIndex) => ({
			onClick: event => {
				setSelectedRecord(record);
				showDrawer();
			},
		}),
		[showDrawer]
	);

	return (
		<>
			<Helmet>
				<title>SIPAS | Agenda Surat Masuk Internal</title>
			</Helmet>
			<Drawer
				title='Agenda Surat Masuk  Internal Detail'
				width={800}
				onClose={closeDrawer}
				visible={detailPaneIsVisible}
			>
				<DetailComponent record={selectedRecord} />
			</Drawer>
			<Page
				name='AgendaSuratMasukView'
			>
				<Row className='table-operations'>
					<Col span={12}>
						<Button onClick={handleReload}>
							<ReloadOutlined />
						</Button>
						<Input.Search
							allowClear
							placeholder='Masukkan kata kunci..'
							onSearch={handleQuery}
							style={{ width: '300px' }}
						/>
					</Col>
					<Col span={4} offset={8}>
						<Select
							defaultValue='aktif'
							onChange={handleChangeSource}
							style={{ width: '100%' }}
						>
							<Select.Option value='aktif'>
								Post Aktif
							</Select.Option>
							<Select.Option value='inaktif'>
								Post Tidak Aktif
							</Select.Option>
							<Select.Option value='semua'>
								Semua Post
							</Select.Option>
						</Select>
					</Col>
				</Row>
				<Table
					columns={columns}
					dataSource={dataSource}
					tableLayout="auto"
					rowKey={rowKey}
					onRow={handleRow}
					loading={loading}
					onChange={onChange}
					pagination={{
						showQuickJumper: true,
						total: 500,
						showTotal: () => `Total baris ${500}`,
					}}
				/>
				{children}
			</Page>
		</>
	);
};

export default AgendaSuratMasukInternalView;
// http://www.json-generator.com/api/json/get/cghQNKQkWG?indent=2