import React from 'react';
import { Menu } from 'antd';

export default function AgendaMenu() {
	const handleClick = e => {
		console.log('click ', e);
	};

	return (
		<Menu onClick={handleClick} style={{ width: 256 }} mode='inline'>
            <Menu.ItemGroup key='sistem' title='Sistem'>
				{[
					['tag', 'Pengaturan Sistem', 'home'],
					['tag', 'Audit Trail', 'home'],
					['tag', 'Penomoran Surat', 'home'],
				].map(i=>
					<Menu.Item key={i[0]}>
						{/* <Icon type={i[2] || 'border'} /> */}
						{i[1]}
					</Menu.Item>
				)}
			</Menu.ItemGroup>
			<Menu.ItemGroup key='organisasi' title='Organisasi'>
				{[
					['unit', 'Unit Kerja', 'home'],
					['jabatan', 'Jabatan', 'star'],
					['staf', 'Pegawai', 'user'],
					['staf_tim', 'Kelompok Pegawai', 'team'],
					['akses', 'Hak Akses', 'compass'],
				].map(i=>
					<Menu.Item key={i[0]}>
						{/* <Icon type={i[2] || 'border'} /> */}
						{i[1]}
					</Menu.Item>
				)}
			</Menu.ItemGroup>
			<Menu.ItemGroup key='atribut' title='Atribut Surat'>
				{[
					['template', 'Template', 'snippets'],
					['kontak', 'Kontak Koresponden', 'contacts'],
					['jenis', 'Jenis Surat', 'tag'],
					['klasifikasi', 'Klasifikasi Surat', 'tag'],
					['prioritas', 'Prioritas Surat', 'tag'],
					['media', 'Media Pengiriman Surat', 'tag'],
					['lokasi', 'Lokasi Fisik Surat', 'database'],
					['ekspedisi', 'Ekspedisi Surat Keluar', 'database'],
					['masa_aktif', 'Masa Aktif Surat', 'database'],
					['sla', 'SLA', 'dashboard'],
					['arahan_respon', 'Arahan Dan Respon', 'message'],
				].map(i=>
					<Menu.Item key={i[0]}>
						{/* <Icon type={i[2] || 'border'} /> */}
						{i[1]}
					</Menu.Item>
				)}
			</Menu.ItemGroup>
		</Menu>
	);
}
