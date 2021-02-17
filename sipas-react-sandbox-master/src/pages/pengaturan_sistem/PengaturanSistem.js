// @flow
import React, { memo, lazy } from 'react';
import { withHome, NotFound } from 'viewport';
import { connect, selectUsername } from 'reducers/Session';
import PengaturanSistemView from './PengaturanSistemView';


type Props = {
	username?: string,
};

const upMenu = [
	{ title: 'menu.pengaturan.UMUM', route: '/pengaturan_sistem/umum', component: lazy(() => import('pages/posts')) },
	{ title: 'menu.pengaturan.ASISTENSI', route: '/asistensi', component: lazy(() => import('pages/Profile')) },
	{ title: 'menu.pengaturan.KOP', route: '/kop', component: lazy(() => import('pages/posts')) },
	{ title: 'menu.pengaturan.KELOLA_SURAT', route: '/kelola_surat', component: lazy(() => import('pages/posts')) },
	{ title: 'menu.pengaturan.PENOMORAN_SURAT', route: '/penomoran_surat', component: lazy(() => import('pages/posts')) },
	{ title: 'menu.pengaturan.NOTIF_EMAIL', route: '/notif_email', component: lazy(() => import('pages/posts')) },
	{ title: 'menu.pengaturan.NOTIF_SURAT', route: '/notif_surat', component: lazy(() => import('pages/posts')) },
	{ title: 'menu.pengaturan.TEMPLATE', route: '/template', component: lazy(() => import('pages/posts')) },
];

const routes = [].concat(
	[{path: '/', exact: true}],
	[...upMenu].map(({ route, exact, component}) => ({
		exact,
		path: route,
		component: component || NotFound
	}))
)

const Pengaturansistem = ({ username, ...props }: Props) => {
	return(
		<PengaturanSistemView
		name={12}
		routes={routes}
		upMenu={upMenu}
		{...props}
		/>
	);
};

const mapState = state => ({
	username: selectUsername(state),
});

export default withHome(connect(mapState, null)(memo(Pengaturansistem)));


