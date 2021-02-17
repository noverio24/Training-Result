import React, {memo} from 'react';
import { NotFound } from 'viewport';
import TerkirimAsistensiView from './Terkirim_AsistensiView';

const dataTerkirimAsistensi = [
    {
        id: 1, 
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
    [...dataTerkirimAsistensi].map(({route, exact, component}) => ({
        exact,
        path: route,
        component: component || NotFound
    }))
)

const Terkirim_Asistensi = ({...props}) => {
    return(
        <TerkirimAsistensiView 
        routes={routes}
        dataTerkirimAsistensi={dataTerkirimAsistensi}
        {...props}
        />
    );
};

export default memo(Terkirim_Asistensi);