import React, {memo} from 'react';
import { NotFound } from 'viewport';
import TerkirimView from './Terkirim_SuratkuView';

const dataTerkirim = [
    {
        id: 1, 
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
    
];

const routes = [].concat(
    [{exact: true}],
    [...dataTerkirim].map(({route, exact, component}) => ({
        exact,
        path: route,
        component: component || NotFound
    }))
)

const Terkirim_Suratku = ({...props}) => {
    return(
        <TerkirimView 
        routes={routes}
        dataTerkirim={dataTerkirim}
        {...props}
        />
    );
};

export default memo(Terkirim_Suratku);