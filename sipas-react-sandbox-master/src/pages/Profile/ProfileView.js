// @flow
import React, { memo, Suspense } from 'react';
import { Page, Curtain, NotFound } from 'viewport';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Layout, Menu, Avatar, Modal, Button } from 'antd';
import classnames from 'classnames';

import { BorderOutlined } from '@ant-design/icons';
import { withTranslation } from 'react-i18next';
import './ProfileView.scss';

type Props = {
	name?: string,
	leftMenu: Array,
	routes: Array<{}>,
};



const ProfileView = ({routes, name, leftMenu, t, ...props }: Props) =>{
	let { path } = useRouteMatch();
	const { url } = useRouteMatch();
	
	return(
		<Page name='ProfileView' plain={true}>
			<Layout.Sider theme='light' width={320}>
				<Menu mode='inline'>
					<div className={classnames('avatar')}>
						<Avatar size={175} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
					</div>
					{leftMenu.map(m => (
						<Menu.Item key={m.route}>
							<Link to={url + m.route}>
								{m.icon || <BorderOutlined/>}
								{t(m.title)}
							</Link>
						</Menu.Item>
					))}
				</Menu>
			</Layout.Sider>
		
			<Layout.Content className={classnames('content')}>
				<Suspense fallback={<Curtain />}>
					<Switch>
						{routes.map(route => (
							<Route 
								key={route.path}
								exact={route.exact}
								path={path + route.path}
								component={route.component}
							/>
						))}
						<Route path='*' component={NotFound} />
					</Switch>
				</Suspense>
			</Layout.Content>
		</Page>
	)

};
ProfileView.defaultProps = {
	routes: [],
	leftMenu: [],
};

export default withTranslation()(memo(ProfileView));
// export default memo(ProfileView);