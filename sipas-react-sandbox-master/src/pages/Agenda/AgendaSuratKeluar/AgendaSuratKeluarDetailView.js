import React, { memo } from 'react';
import { Typography } from 'antd';
import './AgendaSuratKeluarDetailView.scss';

const { Title, Paragraph, Text } = Typography;

type Props = {
	title?: string,
	body?: string,
	userId?: string,
};

const AgendaSuratKeluarDetailView = ({ title, body, userId }: Props) => (
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

AgendaSuratKeluarDetailView.defaultProps = {
	title: null,
	body: null,
	userId: null,
};

export default memo(AgendaSuratKeluarDetailView);
