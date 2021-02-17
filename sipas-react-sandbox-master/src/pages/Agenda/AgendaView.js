import React, { memo, Suspense } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import classnames from 'classnames';
import { PageHeader, Layout, Menu, Col, Row, Card } from 'antd';
import { pipe } from 'system/Utils';
import { BorderOutlined, DownOutlined } from '@ant-design/icons';

import { withTranslation } from 'react-i18next';
import { Page, Curtain, NotFound } from 'viewport';

import './AgendaView.scss';

type Props = {
	routes: Array<{}>,
	menus: Array,
};

const AgendaView = ({ routes, menus, t, ...props }: Props) => {
	let { path } = useRouteMatch();
	const { url } = useRouteMatch();

	return (
		<Page name='Agenda' plain={true}>
			<Layout.Sider theme='light' width={260}>
				{/* <PageHeader title={t('menu.Agenda')} /> */}
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

				<Menu mode='inline' theme='light'>
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

AgendaView.defaultProps = {
	routes: [],
	menus: [],
};

export default pipe(withTranslation(), memo)(AgendaView);



// // @flow
// import React, { memo, Suspense } from 'react';
// import { Page, Curtain, NotFound } from 'viewport';
// import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
// import { PageHeader, Layout, Menu, Card, Row, Col, Avatar, Divider } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
// import classnames from 'classnames';
// import { withTranslation } from 'react-i18next';

// import './AgendaView.scss';

// type Props = {
// 	name?: string,
// 	upMenu: Array,
// 	inMenu: Array,
// 	dataMenu: Array,
// 	routes: Array<{}>,
// };

// const AgendaView = ({ routes, name, upMenu, inMenu, dataMenu, t, ...props }: Props) =>{
// 	let { path } = useRouteMatch();
// 	const { url } = useRouteMatch();
// 	return(
// 		<Page name='Agenda' plain={true}>
// 			<Layout.Sider theme='light' width={300}>
				// <Card className={classnames('card')}>
               	// 	<Row className={classnames('card_text')}>
                //   		<Col span={19}>
                //       		<h4>Administrator Aplikasi - 
                //         		Bidang Pengembangan Sistem dan Tata Kelola
				// 			</h4>
                //    		</Col>
				// 		<Col span={16} className={classnames('DownOutlined')}>
				// 		<DownOutlined />
				// 		</Col>
               	// 	</Row>
                // </Card>

// 				<Card>
					// <Col span={16}>
					// 	<h4>SURAT EKSTERNAL</h4>
					// </Col>
// 					<Menu mode='vertical' width={100} >
// 						{upMenu.map(m => (
// 							<Menu.Item key={m.route}>
// 								<Link to={url + m.route}>
// 									{t(m.title)}
// 								</Link>
// 							</Menu.Item>
// 						))}
// 					</Menu>
// 				</Card>

// 				<Card>
// 					<Col span={16}>
// 						<h4>SURAT INTERNAL</h4>
// 					</Col>
// 					<Menu mode='vertical' width={100} >
// 						{inMenu.map(m => (
// 							<Menu.Item key={m.route}>
// 								<Link to={url + m.route}>
// 									{t(m.title)}
// 								</Link>
// 							</Menu.Item>
// 						))}
// 					</Menu>
// 				</Card>

				
// 				<Card>
// 					<Col span={16}>
// 						<h4>DATA</h4>
// 					</Col>
// 					<Menu mode='vertical' width={100} >
// 						{dataMenu.map(m => (
// 							<Menu.Item key={m.route}>
// 								<Link to={url + m.route}>
// 									{t(m.title)}
// 								</Link>
// 							</Menu.Item>
// 						))}
// 					</Menu>
// 				</Card>
				
// 			</Layout.Sider>
// 			<Layout.Content className={classnames('content')}>
// 				<Suspense fallback={<Curtain />}>
// 					<Switch>
// 						{routes.map(route => (
// 							<Route 
// 								key={route.path}
// 								exact={route.exact}
// 								path={path + route.path}
// 								component={route.component}
// 							/>
// 						))}
// 						<Route path='*' component={NotFound} />
// 					</Switch>
// 				</Suspense>
// 			</Layout.Content>
// 		</Page>
// 	)

// };
// AgendaView.defaultProps = {
// 	routes: [],
// 	upMenu: [],
// };

// export default withTranslation()(memo(AgendaView));


