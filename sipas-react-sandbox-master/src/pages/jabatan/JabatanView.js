// @flow
import React, { useState, useCallback, Node } from 'react';
import { Table, Button, Select, Row, Col, Drawer, Modal } from 'antd';
import { TeamOutlined, } from '@ant-design/icons';
import { Page } from 'viewport';
import Helmet from 'react-helmet';
import './JabatanView.scss';

const columns = [
	{
		key: 'nama_jabatan',
		title: 'Nama Jabatan',
		dataIndex: 'nama_jabatan',
		render: text => [
			<TeamOutlined type='read' style={{ marginRight: 16 }} />,
			text,
		],
		ellipsis: true,
    },
    {
		key: 'kode_jabatan',
		title: 'Kode Jabatan',
		dataIndex: 'kode_jabatan',
		render: text => [
			text,
		],
		ellipsis: true,
    },
    {
		key: 'induk_jabatan',
		title: 'Induk Jabatan',
		dataIndex: 'induk_jabatan',
		render: text => [
			text,
		],
		ellipsis: true,
    },
    {
		key: 'unit_kerja',
		title: 'Unit Kerja',
		dataIndex: 'unit_kerja',
		render: text => [
			text,
		],
		ellipsis: true,
    },
    {
		key: 'kode_eselon',
		title: 'Kode Eselon',
		dataIndex: 'kode_eselon',
		render: text => [
			text,
		],
		ellipsis: true,
    },
];

type Props = {
	loading: boolean,
	dataSource: Array<any>,
	rowKey: string,

	handleReload: () => void,
	handleCreate: () => void,
	handleChangeSource: () => void,
	handleQuery: () => void,

	detailView: Node,
	children: Node
};

const JabatanView = ({
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
				<title>SIPAS | Jabatan</title>
			</Helmet>
			<Drawer
				title='Detail Jabatan'
				width={800}
				onClose={closeDrawer}
				visible={detailPaneIsVisible}
			>
				<DetailComponent record={selectedRecord} />
			</Drawer>
			<Page
				name='JabatanView'
				title='Daftar Jabatan'
				headerExtra={[
		
				]}
			>
				<Row className='table-operations'>
					<Col span={12}>
						<Button onClick={handleReload} type="default"
                            style={{color: "#00b7c2", borderWidth: 1, borderColor: "#00b7c2", fontWeight: "normal"}}
                        >
							MUAT ULANG
						</Button>
						<Button
                            style={{color: "#39c878",  fontWeight: "bold"}}
                        >
						TAMBAH
					</Button>,
                        <Modal
                        title="Basic Modal"
                        // visible={this.state.visible}
                        // onOk={this.handleOk}
                        // onCancel={this.handleCancel}
                        >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
					</Col>
					<Col span={4} offset={8}>
						<Select
							defaultValue='aktif'
							onChange={handleChangeSource}
							style={{ width: '100%' }}
						>
							<Select.Option value='aktif'>
								Jabatan Aktif
							</Select.Option>
							<Select.Option value='inaktif'>
								Jabatan Tidak Aktif
							</Select.Option>
							<Select.Option value='semua'>
								Semua Jabatan
							</Select.Option>
						</Select>
					</Col>
				</Row>
				<Table
					columns={columns}
					dataSource={dataSource}
					rowKey={rowKey}
					onRow={handleRow}
					loading={loading}
					pagination={{
						showQuickJumper: true,
						total: 20,
						showTotal: () => `Total baris ${20}`,
					}}
				/>
				{children}
			</Page>
		</>
	);
};

export default JabatanView;
