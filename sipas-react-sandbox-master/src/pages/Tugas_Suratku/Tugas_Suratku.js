import React, {memo} from 'react';
import { NotFound } from 'viewport';
import TugasSuratkuView from './Tugas_SuratkuView';

const dataTugasSuratku = [
    {
        id: 1, 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        status: 'Belum Terbaca',
        keteranganSurat: 'SK', 
        tipe: 'Nota Dinas',
        jenisSurat: 'Internal', 
        subject: 'Kerjasama antar vendor Dinas Balikpapan',
        from: 'Bapak Kepala Dinas',
        nomorSurat: '055/DKA/06/2019',
        tanggalMasuk: 'Kemarin',
    },
    {
        id: 2, 
        icon: 'https://www.flaticon.com/premium-icon/icons/svg/3293/3293504.svg', 
        status: 'Belum Terbaca',
        keteranganSurat: 'Undangan', 
        tipe: 'Disposisi',
        jenisSurat: 'Eksternal', 
        subject: 'Undangan Upacara Memperingati Hari ...',
        nomorSurat: '055/DKA/06/2019',
        tanggalMasuk: '2 Hari lalu',
        fromDisposisi: 'Dony Bahtera',
        profileDisposisi: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png',
        from: 'Kementrian BUMN',
        iconDisposisi: 'https://cdn1.iconfinder.com/data/icons/social-shade-rounded-rects/512/creative_common-512.png',
        isiDisposisi: 'Mohon segera diselesaikan',
        ketDisposisi: 'Dikirim sebagai Nota Dinas'
    },
    {
        id: 3, 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        status: 'Sudah Terbaca',
        keteranganSurat: 'SK', 
        tipe: 'Nota Dinas',
        jenisSurat: 'Internal', 
        subject: 'Kerjasama antar vendor Dinas Balikpapan',
        from: 'Bapak Kepala Dinas',
        nomorSurat: '055/DKA/06/2019',
        tanggalMasuk: 'Kemarin',
    },
    {
        id: 4, 
        icon: 'https://www.flaticon.com/premium-icon/icons/svg/3293/3293504.svg', 
        status: 'Sudah Terbaca',
        keteranganSurat: 'Undangan', 
        tipe: 'Disposisi',
        jenisSurat: 'Eksternal', 
        subject: 'Undangan Upacara Memperingati Hari ...',
        nomorSurat: '055/DKA/06/2019',
        tanggalMasuk: '2 Hari lalu',
        fromDisposisi: 'Dony Bahtera',
        profileDisposisi: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png',
        from: 'Kementrian BUMN',
        iconDisposisi: 'https://cdn1.iconfinder.com/data/icons/social-shade-rounded-rects/512/creative_common-512.png',
        isiDisposisi: 'Mohon segera diselesaikan',
        ketDisposisi: 'Dikirim sebagai Nota Dinas'
    },
    {
        id: 5, 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        status: 'Sudah Terbaca',
        keteranganSurat: 'SK', 
        tipe: 'Nota Dinas',
        jenisSurat: 'Internal', 
        subject: 'Kerjasama antar vendor Dinas Balikpapan',
        from: 'Bapak Kepala Dinas',
        nomorSurat: '055/DKA/06/2019',
        tanggalMasuk: 'Kemarin',
    },
    {
        id: 6, 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        status: 'Sudah Terbaca',
        keteranganSurat: 'SK', 
        tipe: 'Nota Dinas',
        jenisSurat: 'Internal', 
        subject: 'Kerjasama antar vendor Dinas Balikpapan',
        from: 'Bapak Kepala Dinas',
        nomorSurat: '055/DKA/06/2019',
        tanggalMasuk: 'Kemarin',
    },
];

const routes = [].concat(
    [{exact: true}],
    [...dataTugasSuratku].map(({route, exact, component}) => ({
        exact,
        path: route,
        component: component || NotFound
    }))
)

const Tugas_Suratku = ({...props}) => {
    return(
        <TugasSuratkuView 
        routes={routes}
        dataTugasSuratku={dataTugasSuratku}
        {...props}
        />
    );
};

export default memo(Tugas_Suratku);