import React, { memo, lazy } from 'react';
import { pipe } from 'system/Utils';
import { withHome, NotFound } from 'viewport';
import DefaultPage from './DefaultPage';
import PengaturanView from './PengaturanView';
import {
	SettingFilled,
	LineChartOutlined,
	NumberOutlined,
	HomeOutlined,
	StarOutlined,
	UserOutlined,
	TeamOutlined,
	CompassOutlined,
	SnippetsOutlined,
	ContactsOutlined,
	TagOutlined,
	DatabaseOutlined,
	CodeSandboxOutlined,
	ClockCircleOutlined,
	MessageOutlined,
	DashboardOutlined
} from '@ant-design/icons';

const sistemMenu = [
	{ title: 'Todos', route: '/todos', component: lazy(() => import('pages/todos')) },
	{ title: 'Posts', route: '/posts', component: lazy(() => import('pages/posts')) },
	{ title: 'Comments', route: '/comments' },


	{ title: 'menu.pengaturan.SISTEM', route: '/pengaturan_sistem', component: lazy(() => import('pages/pengaturan_sistem')), icon: <SettingFilled /> },
	{ title: 'menu.pengaturan.AUDIT', route: '/audit', component: lazy(() => import('pages/audit')), icon: <LineChartOutlined /> },
	{ title: 'menu.pengaturan.PENOMORAN', route: '/penomoran', component: lazy(() => import('pages/penomoran_surat')), icon: <NumberOutlined /> }
];

const orgMenu = [
	{ title: 'menu.pengaturan.SATKER', route: '/satker',  component: lazy(() => import('pages/unit_kerja')),  icon: <HomeOutlined /> },
	{ title: 'menu.pengaturan.JABATAN', route: '/jabatan',   component: lazy(() => import('pages/jabatan')), icon: <StarOutlined /> },
	{ title: 'menu.pengaturan.STAF', route: '/staf',  component: lazy(() => import('pages/pegawai')), icon: <UserOutlined /> },
	{ title: 'menu.pengaturan.STAF_TIM', route: '/staf_tim', component: lazy(() => import('pages/daftar_kelompok')), icon: <TeamOutlined /> },
	{ title: 'menu.pengaturan.AKSES', route: '/akses',  component: lazy(() => import('pages/hak_akses')), icon: <CompassOutlined /> }
];

const atributMenu = [
	{ title: 'menu.pengaturan.KLISE', route: '/klise', icon: <SnippetsOutlined /> },
	{ title: 'menu.pengaturan.KONTAK', route: '/kontak', component: lazy(() => import('pages/kontak')), icon: <ContactsOutlined /> },
	{ title: 'menu.pengaturan.JENIS', route: '/jenis',component: lazy(() => import('pages/Jenis')), icon: <TagOutlined /> },
	{ title: 'menu.pengaturan.KLASIFIKASI', route: '/klasifikasi', component: lazy(() => import('pages/Klasifikasi')), icon: <TagOutlined /> },
	{ title: 'menu.pengaturan.PRIORITAS', route: '/prioritas', icon: <TagOutlined /> },
	{ title: 'menu.pengaturan.MEDIA', route: '/media', icon: <TagOutlined /> },
	{ title: 'menu.pengaturan.LOKASI', route: '/lokasi', icon: <DatabaseOutlined /> },
	{ title: 'menu.pengaturan.EKSPEDISI', route: '/ekspedisi', icon: <CodeSandboxOutlined /> },
	{ title: 'menu.pengaturan.MASAAKTIF', route: '/masaaktif', icon: <ClockCircleOutlined /> },
	{ title: 'menu.pengaturan.ARAHAN', route: '/arahan', icon: <MessageOutlined /> },
	{ title: 'menu.pengaturan.RESPON', route: '/respon', icon: <MessageOutlined /> },
	{ title: 'menu.pengaturan.SLA', route: '/sla', icon: <DashboardOutlined /> }
];

const menus = [
	{ title: 'menu.pengaturan.SISTEM', key: 'sistemMenu', menu: sistemMenu },
	{ title: 'menu.pengaturan.ORGANISASI', key: 'organisasiMenu', menu: orgMenu },
	{ title: 'menu.pengaturan.ATRIBUT', key: 'atributMenu', menu: atributMenu }
];

const routes = [].concat(
	[{ path: '/', exact: true, component: DefaultPage }],
	[...sistemMenu, ...orgMenu, ...atributMenu].map(({ route, exact, component }) => ({
		exact,
		path: route,
		component: component || NotFound
	}))
);

const Pengaturan = ({ ...props }) => {
	return (
		<PengaturanView
			routes={routes}
			menus={menus}
			sistemMenu={sistemMenu}
			orgMenu={orgMenu}
			atributMenu={atributMenu}
			{...props}
		/>
	);
};

export default pipe(memo, withHome)(Pengaturan);
