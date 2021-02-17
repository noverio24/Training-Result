import React, { memo, Suspense } from 'react';
import { Page, Curtain, NotFound } from 'viewport';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Badge, Card, Avatar, Row, Col } from 'antd'
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';

// import { AudioOutlined } from '@ant-design/icons';

import './AsistensiView.scss'
import { Layout, Menu } from 'antd';

type Props = {
	leftMenu: Array,
	routes: Array<{}>,
};

// const { Search } = Input;

// const suffix = (
// 	<AudioOutlined
// 	  style={{
// 		fontSize: 16,
// 		color: '#1890ff',
// 	  }}
// 	/>
//   );

const AsistensiView = ({ routes, leftMenu, t, ...props }: Props) => {
	let { path } = useRouteMatch();
	const { url } = useRouteMatch();
	return(
		
		<Page name='Asistensi' plain={true}>
			<Layout.Sider theme='light' width={520}>
				{/* <PageHeader
				ghost={false}
				onBack={() => window.history.back()}
				extra={[
					<Search
					placeholder="input search text"
					onSearch={value => console.log(value)}
					style={{ width: 200 }}
					/>
				]}
				/> */}
 					

				<Row>
					<Badge count={14} className={classnames('card_hover1')}>
						<Card>
						<Row>
						<Col span={2} className={classnames('card')}><Avatar  size={15} src="https://perfectczechwomen.com/wp-content/uploads/2019/04/New-Profile-20-500x536.jpg"/></Col>
							 <Col span={21} >
      							 <div className={classnames('card_link')}>
                                    <span>
                                          <h5>Ayu Dewi, S.Kom.</h5>
										  <h6>PT Semangat Indonesia Jaya</h6>
										  <h6>Direktur Utama</h6>
                                    </span>
            					</div>
                            </Col>
                    	</Row>
						</Card>
					</Badge>	
					<Badge count={14} className={classnames('card_hover1')}>
						<Card>
						<Row>
						<Col span={2} className={classnames('card')}><Avatar  size={15} src="https://perfectczechwomen.com/wp-content/uploads/2019/04/New-Profile-20-500x536.jpg"/></Col>
							 <Col span={21} >
      							 <div className={classnames('card_link')}>
                                    <span>
                                          <h5>Ayu Dewi, S.Kom.</h5>
										  <h6>PT Semangat Indonesia Jaya</h6>
										  <h6>Direktur Utama</h6>
                                    </span>
            					</div>
                            </Col>
                    	</Row>
						</Card>
					</Badge>		
				</Row>
			
				<Menu mode='horizontal'>
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
				{/* <Suspense fallback = {<Curtain />}>
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
				</Suspense> */}
			</Layout.Content>

		</Page>
	)
};
AsistensiView.defaultProps = {
	routes: [],
	leftMenu: [],
};
export default withTranslation()(memo(AsistensiView));