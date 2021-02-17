import React, { memo } from 'react';
import classnames from 'classnames';
import { List, Button, Avatar } from 'antd';

const descText = '';

const notifications = [
	{ title: 'Agd Masuk Baru' },
	{ title: 'Agd Masuk Reminder 7 Hari' },
	{ title: 'Agd Masuk Reminder 3 Hari' },
	{ title: 'Agd Masuk Reminder 1 Hari' },
	{ title: 'Agd Keluar Tertolak' },
	{ title: 'Agd Keluar Nomor' }
];

const NotifPaneView = props => (
	<List {...props}
        className={classnames('NotifPaneView')}
		itemLayout='horizontal'
		header={
			<div className={classnames('header')}>
				<span className={classnames('title')}>Notifikasi Agenda Surat</span>
				<Button type='link' className={classnames('markAll')}>
					Tandai semua telah dibaca
				</Button>
			</div>
		}
		footer={
			<div className={classnames('footer')}>
				<Button type='link' onClick={() => null}>
					Lihat Semua
				</Button>
			</div>
		}
		dataSource={notifications}
		renderItem={item => (
			<List.Item>
				<List.Item.Meta
					avatar={<Avatar src='https://i.pravatar.cc/64' />}
					title={item.title}
					description={descText}
				/>
			</List.Item>
		)}
	/>
);

NotifPaneView.propTypes = {}

export default memo(NotifPaneView);