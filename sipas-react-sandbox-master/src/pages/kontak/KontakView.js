// @flow
import React, { useState, useCallback, Node } from 'react';
import { Table, Button, Row, Col, Drawer, Modal } from 'antd';
import { TeamOutlined, } from '@ant-design/icons';
import { Page } from 'viewport';
import Helmet from 'react-helmet';
import './KontakView.scss';

const columns = [
	{
		key: 'nama_kontak',
		title: 'Nama Kontak',
		dataIndex: 'nama_kontak',
		render: text => [
			<TeamOutlined type='read' style={{ marginRight: 16 }} />,
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

const KontakView = ({
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
				<title>SIPAS | Daftar Kontak</title>
			</Helmet>
			<Drawer
				title='Detail Kontak'
				width={800}
				onClose={closeDrawer}
				visible={detailPaneIsVisible}
			>
				<DetailComponent record={selectedRecord} />
			</Drawer>
			<Page
				name='KontakView'
				title='Daftar Kontak'
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
					{/* <Col span={4} offset={8}>
						<Select
							defaultValue='aktif'
							onChange={handleChangeSource}
							style={{ width: '100%' }}
						>
							<Select.Option value='aktif'>
								Unit Kerja Aktif
							</Select.Option>
							<Select.Option value='inaktif'>
								Unit Kerja Tidak Aktif
							</Select.Option>
							<Select.Option value='semua'>
								Semua Unit Kerja
							</Select.Option>
						</Select>
					</Col> */}
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

export default KontakView;
