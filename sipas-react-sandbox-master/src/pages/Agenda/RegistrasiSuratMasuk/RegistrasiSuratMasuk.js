import React, { memo, lazy } from 'react';
import { NotFound } from 'viewport';
import RegistrasiSuratMasukView from "./RegistrasiSuratMasukView";
import './RegistrasiSuratMasukView.scss';

const dataTugas = [
    {
        id: 1,
        tipe_surat:'UM Umum', 
        jenis: 'Masuk Eksternal',
        surat: 'Kerjasama antar vendor', 
        dari: 'Bapak Kepala Dinas',
        nomor: '055/DKA/06/2019',
        status: 'Belum Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760821.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: 'Hari ini', 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        component: lazy(() => import('pages/Agenda/RegistrasiSuratMasuk')), 
    },
    {
        id: 2,
        tipe_surat:'UM Umum', 
        jenis: 'Masuk Eksternal',
        surat: 'Kerjasama antar vendor', 
        dari: 'Bapak Kepala Dinas',
        nomor: '055/DKA/06/2019',
        status: 'Belum Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760821.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: 'Kemarin', 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        component: lazy(() => import('pages/Agenda/RegistrasiSuratMasuk')), 
    },
    {
        id: 3,
        tipe_surat:'UM Umum', 
        jenis: 'Masuk Eksternal',
        surat: 'Kerjasama antar vendor', 
        dari: 'Bapak Kepala Dinas',
        nomor: '055/DKA/06/2019',
        status: 'Belum Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760821.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: '2 Hari Kemarin', 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        component: lazy(() => import('pages/Agenda/RegistrasiSuratMasuk')), 
    },
    {
        id: 4,
        tipe_surat:'UM Umum', 
        jenis: 'Masuk Eksternal',
        surat: 'Kerjasama antar vendor', 
        dari: 'Bapak Kepala Dinas',
        nomor: '055/DKA/06/2019',
        status: 'Sudah Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760169.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: '1 Minggu yg lalu', 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        component: lazy(() => import('pages/Agenda/RegistrasiSuratMasuk')), 
    },
    {
        id: 5,
        tipe_surat:'UM Umum', 
        jenis: 'Masuk Eksternal',
        surat: 'Kerjasama antar vendor', 
        dari: 'Bapak Kepala Dinas',
        nomor: '055/DKA/06/2019',
        status: 'Sudah Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760169.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: '1 Minggu yg lalu', 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        component: lazy(() => import('pages/Agenda/RegistrasiSuratMasuk')), 
    },
    {
        id: 6,
        tipe_surat:'UM Umum', 
        jenis: 'Masuk Eksternal',
        surat: 'Kerjasama antar vendor', 
        dari: 'Bapak Kepala Dinas',
        nomor: '055/DKA/06/2019',
        status: 'Sudah Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760169.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: '1 Minggu yg lalu', 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        component: lazy(() => import('pages/Agenda/RegistrasiSuratMasuk')), 
    },
    {
        id: 7,
        tipe_surat:'UM Umum', 
        jenis: 'Masuk Eksternal',
        surat: 'Kerjasama antar vendor', 
        dari: 'Bapak Kepala Dinas',
        nomor: '055/DKA/06/2019',
        status: 'Sudah Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760169.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: '1 Minggu yg lalu', 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        component: lazy(() => import('pages/Agenda/RegistrasiSuratMasuk')), 
    },
    {
        id: 8,
        tipe_surat:'UM Umum', 
        jenis: 'Masuk Eksternal',
        surat: 'Kerjasama antar vendor', 
        dari: 'Bapak Kepala Dinas',
        nomor: '055/DKA/06/2019',
        status: 'Sudah Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760169.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: '1 Minggu yg lalu', 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        component: lazy(() => import('pages/Agenda/RegistrasiSuratMasuk')), 
    },
    {
        id: 9,
        tipe_surat:'UM Umum', 
        jenis: 'Masuk Eksternal',
        surat: 'Kerjasama antar vendor', 
        dari: 'Bapak Kepala Dinas',
        nomor: '055/DKA/06/2019',
        status: 'Sudah Terbaca', 
        icon_status: 'https://image.flaticon.com/icons/svg/760/760169.svg',
        tembusan: '- ', 
        berkas: '-', 
        tgl_terima: '1 Minggu yg lalu', 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        component: lazy(() => import('pages/Agenda/RegistrasiSuratMasuk')), 
    },
];

const berkas = [].concat(
    [{exact: true}],
    [...dataTugas].map(({berkas, exact, component}) => ({
        exact,
        path: berkas,
        component: component || NotFound
    }))
)

const RegistrasiSuratMasuk = ({...props}) => {
    return(
        <RegistrasiSuratMasukView 
        berkas={berkas}
        dataTugas={dataTugas}
        {...props}
        />
    );
};

export default memo(RegistrasiSuratMasuk);