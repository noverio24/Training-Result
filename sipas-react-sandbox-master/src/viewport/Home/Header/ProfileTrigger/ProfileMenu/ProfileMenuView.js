import React, { memo } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import LogoutButton from './LogoutButton';

const ProfileMenuView = ({t, tReady /** we need to remove tReady to avoid bug */, ...props }) => ( 
	<Menu {...props}>
		<Menu.Item>
			<Link to='/me'>{t('menu.PROFILE_SAYA')}</Link>
		</Menu.Item>
		<Menu.Divider />
		<Menu.Item>
			<Link to='/me'>{t('menu.BUKU_PANDUAN')}</Link>
		</Menu.Item>
		<Menu.Item>
			<Link to='/me'>{t('menu.UMPAN_BALIK')}</Link>
		</Menu.Item>
		<Menu.Item>
			<Link to='/me'>{t('menu.UNDUH_MOBILE')}</Link>
		</Menu.Item>
		<Menu.Divider />
		<Menu.Item>
			<LogoutButton />
		</Menu.Item>
	</Menu>
);

ProfileMenuView.propTypes = {};

export default withTranslation()(memo(ProfileMenuView));
