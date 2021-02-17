import React, { memo } from 'react';
import { Typography } from 'antd';
// import './PostDetailView.scss';

const { Title, Paragraph, Text } = Typography;

type Props = {
	title?: string,
	body?: string,
	userId?: string,
};

const AgendaSuratKeluarInternalDetailView = ({ title, body, userId }: Props) => (
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

AgendaSuratKeluarInternalDetailView.defaultProps = {
	title: null,
	body: null,
	userId: null,
};

export default memo(AgendaSuratKeluarInternalDetailView);
