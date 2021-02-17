import React, { memo, lazy } from 'react';
import { pipe } from 'system/Utils';
import { withHome, NotFound } from 'viewport';
import DefaultPage from './DefaultPage';
import AgendaView from './AgendaView';
import {
	EditOutlined,
	SendOutlined,
	MailOutlined,
	InboxOutlined,
	PaperClipOutlined,
	FolderOutlined,
	FieldTimeOutlined
} from '@ant-design/icons';

const sistemMenu = [
	{ title: 'menu.agenda.REGISTRASI_SM', route: '/RegistrasiSuratMasuk', component: lazy(() => import('pages/Agenda/RegistrasiSuratMasuk')), icon: <EditOutlined /> },
	{ title: 'menu.agenda.AGENDA_SM', route: '/AgendaSuratMasuk', component: lazy(() => import('pages/AgendaSuratMasuk')), icon: <MailOutlined /> },
	{ title: 'menu.agenda.AGENDA_SK', route: '/AgendaSuratKeluar', component: lazy(() => import('pages/Agenda/AgendaSuratKeluar')), icon: <SendOutlined /> },
	{ title: 'menu.agenda.EKSPEDISI_SK', route: '/EkspedisiSuratkeluar', icon: <InboxOutlined /> },
	{ title: 'menu.agenda.KORESPONDENSI_SURAT', route: '/KorespondensiSurat',  icon: <PaperClipOutlined /> }
];

const orgMenu = [
	{ title: 'menu.agenda.AGENDA_SM', route: '/AgendaSuratMasukInternal', component: lazy(() => import('pages/AgendaSuratMasukInternal')), icon: <MailOutlined /> },
	{ title: 'menu.agenda.AGENDA_SK', route: '/AgendaSuratKeluarInternal', component: lazy(() => import('pages/AgendaSuratKeluarInternal')), icon: <SendOutlined /> },
	{ title: 'menu.agenda.KORESPONDENSI_SURAT', route: '/penomoran', component: lazy(() => import('pages/penomoran_surat')), icon: <PaperClipOutlined /> }
];

const atributMenu = [
	{ title: 'menu.agenda.AGENDA_ARSIP_BEBAS', route: '/AgendaArsipBebas', component: lazy(() => import('pages/AgendaArsipBebas')), icon: <FolderOutlined /> },
	{ title: 'menu.agenda.BANK_SURAT', route: '/BankSurat', component: lazy(() => import('pages/bank_surat')), icon: <SendOutlined /> },
	{ title: 'menu.agenda.PELAPORAN', route: '/Pelaporan', component: lazy(() => import('pages/penomoran_surat')), icon: <FieldTimeOutlined /> }
];

const menus = [
	{ title: 'SURAT EKSTERNAL', key: 'sistemMenu', menu: sistemMenu },
	{ title: 'SURAT INTERNAL', key: 'organisasiMenu', menu: orgMenu },
	{ title: 'DATA', key: 'atributMenu', menu: atributMenu }
];

const routes = [].concat(
	[{ path: '/', exact: true, component: DefaultPage }],
	[...sistemMenu, ...orgMenu, ...atributMenu].map(({ route, exact, component }) => ({
		exact,
		path: route,
		component: component || NotFound
	}))
);

const Agenda = ({ ...props }) => {
	return (
		<AgendaView
			routes={routes}
			menus={menus}
			sistemMenu={sistemMenu}
			orgMenu={orgMenu}
			atributMenu={atributMenu}
			{...props}
		/>
	);
};

export default pipe(memo, withHome)(Agenda);
