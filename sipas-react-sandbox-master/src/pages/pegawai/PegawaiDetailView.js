import React, { memo } from 'react';
import { Typography } from 'antd';
import './PegawaiDetailView.scss';

const { Title, Paragraph, Text } = Typography;

type Props = {
	title?: string,
	body?: string,
	userId?: string,
};

const PegawaiDetailView = ({ title, body, userId }: Props) => (
	<div>
		<Title level={2}>{title}</Title>
		<Paragraph>
			{body}
			{body}
		</Paragraph>
		<Text underline type='secondary'>
			author: {userId}
		</Text>
	</div>
);

PegawaiDetailView.defaultProps = {
	title: null,
	body: null,
	userId: null,
};

export default memo(PegawaiDetailView);
