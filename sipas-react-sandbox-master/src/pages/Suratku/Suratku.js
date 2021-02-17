import React, { memo, lazy } from 'react';
import { pipe } from 'system/Utils';
import { withHome, NotFound } from 'viewport';
import SuratkuView from './SuratkuView';

const leftMenu = [
	{title: 'menu.suratku.TUGAS', route: '/tugas', component: lazy(() => import('pages/Tugas_Suratku')),},
	{title: 'menu.suratku.KOREKSI', route: '/koreksi', component: lazy(() => import('pages/Koreksi_Suratku')),},
	{title: 'menu.suratku.MASUK', route: '/masuk', component: lazy(() => import('pages/Masuk_Suratku')),},
	{title: 'menu.suratku.TERKIRIM', route: '/terkirim' , component: lazy(() => import('pages/Terkirim_Suratku')),}
]

const routes = [].concat(
	[{path: '/', exact: true}],
	[...leftMenu].map(({ route, exact, component }) => ({
		exact,
		path: route,
		component: component || NotFound
	}))
)

const Suratku = (...props) => {
	return(
		<SuratkuView
		routes={routes}
		leftMenu={leftMenu}
		{...props}
		/>
	);
};

export default pipe(memo, withHome)(Suratku);