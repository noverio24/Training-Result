import React, { memo } from 'react';
import classnames from 'classnames';
import { Layout } from 'antd';
import Header from './Header';
import './HomeView.scss';

const HomeView = ({ children, ...props }) => (
	<>
		<Header />
		<Layout className={classnames('HomeView')}>{children}</Layout>
	</>
);

export default memo(HomeView);
