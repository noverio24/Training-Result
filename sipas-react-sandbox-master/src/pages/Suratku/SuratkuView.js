import React, { memo, Suspense } from 'react';
import { Page, Curtain, NotFound } from 'viewport';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';
import './SuratkuView.scss'
import { Layout, Menu } from 'antd';

type Props = {
	leftMenu: Array,
	routes: Array<{}>,
};

const SuratkuView = ({ routes, leftMenu, t, ...props }: Props) => {
	let { path } = useRouteMatch();
	const { url } = useRouteMatch();
	return(
		<Page name='Suratku' plain={true}>
			<Layout.Sider theme='light' width={520}>
				<Menu mode='horizontal' >
					{leftMenu.map(m => (
						<Menu.Item key={m.route}>
							<Link to={url + m.route}>
								{t(m.title)}
							</Link>
						</Menu.Item>
					))}
				</Menu>
				<Suspense fallback = {<Curtain />}>
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
			</Layout.Sider>
			<Layout.Content className={classnames('content')}>
			</Layout.Content>

		</Page>
	)
};
SuratkuView.defaultProps = {
	routes: [],
	leftMenu: [],
};
export default withTranslation()(memo(SuratkuView));