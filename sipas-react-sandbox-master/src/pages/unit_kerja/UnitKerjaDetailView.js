import React, { memo } from 'react';
import { Typography, Table } from 'antd';
import './UnitKerjaDetailView.scss';

const { Title, Text } = Typography;

type Props = {
	title?: string,
	body?: string,
	userId?: string,
	dataSource?: String,
};

const UnitKerjaDetailView = ({ title,dataSource,columns, rowKey, handleRow, loading, children, userId }: Props) => (
	<div>
		<Title level={2}>{title}</Title>
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
		<Text underline type='secondary'>
			author: {userId}
		</Text>
	</div>
);

UnitKerjaDetailView.defaultProps = {
	title: null,
	body: null,
	userId: null,
};

export default memo(UnitKerjaDetailView);
