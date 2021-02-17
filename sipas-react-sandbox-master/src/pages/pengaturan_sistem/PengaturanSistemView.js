// @flow
import React, { memo, Suspense } from 'react';
import { Page, Curtain, NotFound } from 'viewport';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { PageHeader, Layout, Menu } from 'antd';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';

import './PengaturanSistemView.scss';

type Props = {
	name?: string,
	upMenu: Array,
	routes: Array<{}>,
};

const PengaturanSistemView = ({ routes, name, upMenu, t, ...props }: Props) =>{
	let { path } = useRouteMatch();
	const { url } = useRouteMatch();
	return(
		<Page name='Pengaturan' plain={true}>
				<PageHeader title={t('menu.pengaturan.SISTEM')} />
				<Menu mode='horizontal' width={100} >
					{upMenu.map(m => (
						<Menu.Item key={m.route}>
							<Link to={url + m.route}>
								{/* {m.icon || <BorderOutlined/>} */}
								{t(m.title)}
							</Link>
						</Menu.Item>
					))}
				</Menu>
		</Page>
	)

};
PengaturanSistemView.defaultProps = {
	routes: [],
	upMenu: [],
};

export default withTranslation()(memo(PengaturanSistemView));








// // // @flow
// // PengaturanSistemView
// import React, { lazy } from 'react'
// import { Tabs, PageHeader } from 'antd';

// const { TabPane } = Tabs;

// class PengaturanSistemView extends React.Component {
//   state = {
//     current: 'mail',
//   };

//   handleClick = e => {
//     console.log('click ', e);
//     this.setState({ current: e.key });
//   };

//   render() {
   
//     return (
// 		<PageHeader title={('Pengaturan Sistem')} >
// 			<Tabs defaultActiveKey="1">
// 				<TabPane tab="Umum" key="1">
// 				</TabPane>
// 				<TabPane tab="Asistensi" key="2">
// 				</TabPane>
// 				<TabPane tab="Kop" key="3"></TabPane>
// 				<TabPane tab="Kelola Surat" key="4"></TabPane>
// 				<TabPane tab="Penomoran Surat" key="5"></TabPane>
// 				<TabPane tab="Notifikasi Email" key="6"></TabPane>
// 				<TabPane tab="Notifikasi Surat" key="7"></TabPane>
// 				<TabPane tab="Template" key="8"></TabPane>
// 			</Tabs>
// 		</PageHeader>
//     );
//   }
// }

// export default PengaturanSistemView;