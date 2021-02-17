import React, { memo, lazy } from 'react';
import { pipe } from 'system/Utils';
import { withHome, NotFound } from 'viewport';
import AsistensiView from './AsistensiView';

const leftMenu = [
	{title: 'menu.asistensi.TUGAS', route: '/tugas', component: lazy(() => import('pages/Tugas_Asistensi')),},
	{title: 'menu.asistensi.KOREKSI', route: '/koreksi' , component: lazy(() => import('pages/Koreksi_Asistensi')),},
	{title: 'menu.asistensi.MASUK', route: '/masuk', component: lazy(() => import('pages/Masuk_Asistensi')), },
	{title: 'menu.asistensi.TERKIRIM', route: '/terkirim', component: lazy(() => import('pages/Terkirim_Asistensi')),}
]

const routes = [].concat(
	[{path: '/', exact: true}],
	[...leftMenu].map(({ route, exact, component }) => ({
		exact,
		path: route,
		component: component || NotFound
	}))
)

const Asistensi = (...props) => {
	return(
		<AsistensiView
		routes={routes}
		leftMenu={leftMenu}
		{...props}
		/>
	);
};

export default pipe(memo, withHome)(Asistensi);