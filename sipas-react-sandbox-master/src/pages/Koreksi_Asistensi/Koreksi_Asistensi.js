import React, {memo} from 'react';
import { NotFound } from 'viewport';
import KoreksiAsistensiView from './Koreksi_AsistensiView';

const dataKoreksiAsistensi = [
    {
        id: 1, 
        icon: 'https://as2.ftcdn.net/jpg/00/75/34/49/500_F_75344932_S7QUCfyBXqDcY59g1pmzqi5PoRh3bovt.jpg',
        status: 'Belum Terbaca',
        keteranganSurat: 'UM Umum', 
        jenisSurat: 'Masuk Eksternal', 
        subject: 'Kerjasama antar vendor Dinas Balikpapan',
        from: 'Bapak Kepala Dinas',
        nomorSurat: '055/DKA/06/2019',
        tanggalMasuk: '12 Jan 2020 17:32',
    },
    {
        id: 2, 
        icon: 'https://www.flaticon.com/premium-icon/icons/svg/3293/3293504.svg', 
        status: 'Belum Terbaca',
        keteranganSurat: 'Berita Acara', 
        jenisSurat: 'Disposisi', 
        subject: 'Divisi Teknik PT. Sejahtera Merdeka',
        nomorSurat: '055/DKA/06/2019',
        tanggalMasuk: '12 Jan 2020 17:32',
        fromDisposisi: 'Dony Bahtera',
        profileDisposisi: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png',
        from: 'Kirim 20 penerima',
        iconDisposisi: 'https://img2.pngdownload.id/20180712/hsj/kisspng-padlock-computer-security-general-guemes-day-5b4762944d2dd2.2983204015314049483161.jpg',
        isiDisposisi: 'Mohon segera diselesaikan',
        ketDisposisi: 'Dikirim sebagai Nota Dinas'
    },
   
];

const routes = [].concat(
    [{exact: true}],
    [...dataKoreksiAsistensi].map(({route, exact, component}) => ({
        exact,
        path: route,
        component: component || NotFound
    }))
)

const Koreksi_Asistensi = ({...props}) => {
    return(
        // <div>Hello</div>
        <KoreksiAsistensiView 
        routes={routes}
        dataKoreksiAsistensi={dataKoreksiAsistensi}
        {...props}
        />
    );
};

export default memo(Koreksi_Asistensi);