import React, { memo } from 'react';
import { Typography } from 'antd';
// import './AgendaArsipBebasDetailView.scss';

const { Title, Paragraph, Text } = Typography;

type Props = {
	title?: string,
	body?: string,
	userId?: string,
};

const AgendaArsipBebasDetailView = ({ title, body, userId }: Props) => (
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

AgendaArsipBebasDetailView.defaultProps = {
	title: null,
	body: null,
	userId: null,
};

export default memo(AgendaArsipBebasDetailView);
