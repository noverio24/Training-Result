import React, { memo, Suspense } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import classnames from 'classnames';
import {  Layout, Menu, Card, Col, Row } from 'antd';
import { pipe } from 'system/Utils';
import { BorderOutlined, DownOutlined } from '@ant-design/icons';

import { withTranslation } from 'react-i18next';
import { Page, Curtain, NotFound } from 'viewport';

import './PengaturanView.scss';

type Props = {
	routes: Array<{}>,
	menus: Array,
};

const PengaturanView = ({ routes, menus, t, ...props }: Props) => {
	let { path } = useRouteMatch();
	const { url } = useRouteMatch();

	return (
		<Page name='Pengaturan' plain={true}>
			<Layout.Sider theme='light' width={260}>
				{/* <PageHeader title={t('menu.PENGATURAN')} /> */}
				<Card className={classnames('card')}>
               		<Row className={classnames('card_text')}>
                  		<Col span={20}>
                      		<h4 className={classnames('h4')}>Administrator Aplikasi - 
                        		Bidang Pengembangan Sistem dan Tata Kelola
							</h4>
                   		</Col>
						<Col span={20} className={classnames('DownOutlined')}>
						<DownOutlined />
						</Col>
               		</Row>
                </Card>
				<Menu mode='inline'>
					{menus.map((m) => (
						<Menu.ItemGroup key={m.key} title={t(m.title)}>
							{m.menu.map((i) => (
								<Menu.Item key={i.route}>
									<Link to={url + i.route}>
										{i.icon || <BorderOutlined />}
										{t(i.title)}
									</Link>
								</Menu.Item>
							))}
						</Menu.ItemGroup>
					))}
				</Menu>
			</Layout.Sider>
			<Layout.Content className={classnames('content')}>
				<Suspense fallback={<Curtain />}>
					<Switch>
						{routes.map((route) => (
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
	);
};

PengaturanView.defaultProps = {
	routes: [],
	menus: [],
};

export default pipe(withTranslation(), memo)(PengaturanView);
