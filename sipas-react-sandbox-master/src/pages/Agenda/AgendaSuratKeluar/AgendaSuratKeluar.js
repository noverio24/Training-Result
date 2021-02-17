// file:///D:/Magang/sipas-react-sandbox-master/src/pages/Agenda/AgendaSuratKeluar/dataAgendaSuratKeluar.json
import React, { memo, lazy } from 'react';
import { NotFound } from 'viewport';
import AgendaSuratKeluarView from "./AgendaSuratKeluarView";
import './AgendaSuratKeluarView.scss';

const dataAgendaSuratKeluar = [
    {
        id: 1,
        tipe_surat:'UM Umum', 
        jenis: 'Keluar Eksternal',
        surat: 'Perayaan Hari Jadi PT Sekawan Media Informatika', 
        dari: 'Manajemen PT Sekawan Media Informatika',
        nomor: '102/MLG/08/2020',
        status: 'Belum Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760821.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: 'Hari ini', 
        icon: 'https://t3.ftcdn.net/jpg/02/73/74/34/240_F_273743462_DvBD1DlOwMm9bnQJaWJ96VIWkpVf7UhA.jpg',
        component: lazy(() => import('pages/Agenda/AgendaSuratKeluar')), 
    },
    {
        id: 2,
        tipe_surat:'UM Umum', 
        jenis: 'Keluar Eksternal',
        surat: 'Perayaan Hari Jadi PT Sekawan Media Informatika', 
        dari: 'Manajemen PT Sekawan Media Informatika',
        nomor: '102/MLG/08/2020',
        status: 'Belum Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760821.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: 'Kemarin', 
        icon: 'https://t3.ftcdn.net/jpg/02/73/74/34/240_F_273743462_DvBD1DlOwMm9bnQJaWJ96VIWkpVf7UhA.jpg',
        component: lazy(() => import('pages/Agenda/AgendaSuratKeluar')), 
    },
    {
        id: 3,
        tipe_surat:'UM Umum', 
        jenis: 'Keluar Eksternal',
        surat: 'Perayaan Hari Jadi PT Sekawan Media Informatika', 
        dari: 'Manajemen PT Sekawan Media Informatika',
        nomor: '102/MLG/08/2020',
        status: 'Belum Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760821.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: '2 Hari Kemarin', 
        icon: 'https://t3.ftcdn.net/jpg/02/73/74/34/240_F_273743462_DvBD1DlOwMm9bnQJaWJ96VIWkpVf7UhA.jpg',
        component: lazy(() => import('pages/Agenda/AgendaSuratKeluar')), 
    },
    {
        id: 4,
        tipe_surat:'UM Umum', 
        jenis: 'Keluar Eksternal',
        surat: 'Perayaan Hari Jadi PT Sekawan Media Informatika', 
        dari: 'Manajemen PT Sekawan Media Informatika',
        nomor: '102/MLG/08/2020',
        status: 'Sudah Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760169.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: '1 Minggu yg lalu', 
        icon: 'https://t3.ftcdn.net/jpg/02/73/74/34/240_F_273743462_DvBD1DlOwMm9bnQJaWJ96VIWkpVf7UhA.jpg',
        component: lazy(() => import('pages/Agenda/AgendaSuratKeluar')), 
    },
    {
        id: 5,
        tipe_surat:'UM Umum', 
        jenis: 'Keluar Eksternal',
        surat: 'Perayaan Hari Jadi PT Sekawan Media Informatika', 
        dari: 'Manajemen PT Sekawan Media Informatika',
        nomor: '102/MLG/08/2020',
        status: 'Sudah Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760169.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: '1 Minggu yg lalu', 
        icon: 'https://t3.ftcdn.net/jpg/02/73/74/34/240_F_273743462_DvBD1DlOwMm9bnQJaWJ96VIWkpVf7UhA.jpg',
        component: lazy(() => import('pages/Agenda/AgendaSuratKeluar')), 
    },
    {
        id: 6,
        tipe_surat:'UM Umum', 
        jenis: 'Keluar Eksternal',
        surat: 'Perayaan Hari Jadi PT Sekawan Media Informatika', 
        dari: 'Manajemen PT Sekawan Media Informatika',
        nomor: '102/MLG/08/2020',
        status: 'Sudah Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760169.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: '1 Minggu yg lalu', 
        icon: 'https://t3.ftcdn.net/jpg/02/73/74/34/240_F_273743462_DvBD1DlOwMm9bnQJaWJ96VIWkpVf7UhA.jpg',
        component: lazy(() => import('pages/Agenda/AgendaSuratKeluar')), 
    },
    
];

const berkas = [].concat(
    [{exact: true}],
    [...dataAgendaSuratKeluar].map(({berkas, exact, component}) => ({
        exact,
        path: berkas,
        component: component || NotFound
    }))
)

const AgendaSuratKeluar = ({...props}) => {
    return(
        <AgendaSuratKeluarView 
        berkas={berkas}
        dataAgendaSuratKeluar={dataAgendaSuratKeluar}
        {...props}
        />
    );
};

export default memo(AgendaSuratKeluar);