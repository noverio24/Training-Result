// @flow
import React, { useState, useCallback, Node } from 'react';
import { Table, Button, Input, Select, Row, Col, Drawer } from 'antd';
import { ReadOutlined, ReloadOutlined } from '@ant-design/icons';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Page } from 'viewport';
import Helmet from 'react-helmet';
import './PostsView.scss';

const columns = [
	{
		key: 'title',
		title: 'Title',
		dataIndex: 'title',
		render: text => [
			<ReadOutlined type='read' style={{ marginRight: 16 }} />,
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

const PostsView = ({
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
				<title>SIPAS | Posts</title>
			</Helmet>
			<Drawer
				title='Post Detail'
				width={800}
				onClose={closeDrawer}
				visible={detailPaneIsVisible}
			>
				<DetailComponent record={selectedRecord} />
			</Drawer>
			<Page
				name='PostsView'
				title='Posts Page'
				headerContent={<LoremIpsum avgSentencesPerParagraph={2} />}
				headerExtra={[
					<Button key='create' type='primary' onClick={handleCreate}>
						Create A Post
					</Button>,
				]}
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
					rowKey={rowKey}
					onRow={handleRow}
					loading={loading}
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

export default PostsView;
