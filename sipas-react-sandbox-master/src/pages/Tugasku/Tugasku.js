import React, { memo, lazy } from 'react';
import { NotFound } from 'viewport';
import TugaskuView from "./TugaskuView";
import './TugaskuView.scss';

const dataTugas = [
    {
        id: 1,
        jenis:'internal', 
        status:'Belum Terbaca',
        perihal: 'SK', 
        waktu: 'kemarin', 
        nama: 'Bapak Kepala Dinas ', 
        route: '/tugaskuDetail', 
        namaIcon: 'Nota Dinas', 
        umur: 22, 
        icon: 'https://st.depositphotos.com/2904097/4544/v/950/depositphotos_45448019-stock-illustration-vector-flat-mail-icon.jpg', 
        judulTugas:'Kerjasama antar vendor Dinas Balikpapan', 
        nomor: '# 055/DKA/06/2019',
        component: lazy(() => import('pages/Tugasku/TugaskuDetail')), 
    },
    {
        id: 2, 
        jenis:'eksternal', 
        status:'Belum Terbaca',
        perihal: 'Undangan', 
        waktu:'19 Jan', 
        nama: 'Kementrian BUMN', 
        namaIcon: 'Disposisi', 
        umur: 24, 
        icon: 'https://www.cloudns.net/blog/wp-content/uploads/2018/03/86306918_m.jpg', 
        judulTugas:'Undangan Upacara Bendera Memperingati Hari ...', 
        nomor: '# 055/DKA/06/2019',
        component: lazy(() => import('pages/Tugasku')), 

    }
];

const routes = [].concat(
    [{exact: true}],
    [...dataTugas].map(({route, exact, component}) => ({
        exact,
        path: route,
        component: component || NotFound
    }))
)

const Tugasku = ({...props}) => {
    return(
        <TugaskuView 
        routes={routes}
        dataTugas={dataTugas}
        {...props}
        />
    );
};

export default memo(Tugasku);