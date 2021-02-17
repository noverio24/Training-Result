import React, { memo } from 'react';
import { Typography } from 'antd';
import './PengaturanSistemDetailView.scss';

const { Title, Paragraph, Text } = Typography;

type Props = {
	title?: string,
	body?: string,
	userId?: string,
};

const PengaturanSistemDetailView = ({ title, body, userId }: Props) => (
	<div>
		<Title level={2}>{title}</Title>
		<Paragraph>
			{body}
			{body}
			{body}
			{body}
			{body}
		</Paragraph>
		<Text underline type='secondary'>
			author: {userId}
		</Text>
	</div>
);

PengaturanSistemDetailView.defaultProps = {
	title: null,
	body: null,
	userId: null,
};

export default memo(PengaturanSistemDetailView);
