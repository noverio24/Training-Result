import React,{ memo } from 'react';
import { Button, Layout } from 'antd';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Page } from 'viewport';

import './AboutView.scss';

const About = (props) => (
	<Page title='About Page'>
		<Layout.Content>
			<Button type='primary'>Primary</Button>
			<LoremIpsum p={50} />
		</Layout.Content>
	</Page>
);

export default memo(About);
