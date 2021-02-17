import React, { memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';
import { Layout, Row, Col, Menu, Badge } from 'antd';

import NotifTrigger from './NotifTrigger';
import ProfileTrigger from './ProfileTrigger';

import './HeaderView.scss';

const HeaderView = ({ t }) => {
	const loc = useLocation();
	let currentPath = loc.pathname;
	currentPath.indexOf(1);
	currentPath = '/' + currentPath.split('/')[1];

	return (
		<Layout.Header className={classnames('HeaderView')}>
			<Row>
				<Col xs={2} sm={4}>
					<div className='logo' />
				</Col>
				<Col xs={20} sm={16}>
					<Menu
						theme='dark'
						mode='horizontal'
						selectedKeys={[currentPath]}
						className={classnames('mainMenu')}>
						<Menu.Item key='/suratku'>
							<NavLink to='/suratku'>
								{t('menu.SURATKU')}
								<Badge count={25} overflowCount={99} />
							</NavLink>
						</Menu.Item>
						<Menu.Item key='/asistensi'>
							<NavLink to='/asistensi'>
								{t('menu.ASISTENSI')}
								<Badge count={14} overflowCount={99} />
							</NavLink>
						</Menu.Item>
						<Menu.Item key='/agenda'>
							<NavLink to='/agenda'>
								{t('menu.AGENDA')}
							</NavLink>
						</Menu.Item>
						<Menu.Item key='/pengaturan'>
							<NavLink to='/pengaturan'>
								{t('menu.PENGATURAN')}
							</NavLink>
						</Menu.Item>
					</Menu>
				</Col>
				<Col xs={2} sm={4}>
					<Menu
						theme='dark'
						mode='horizontal'
						align='right'
						selectable={false}
						selectedKeys={[currentPath]}
						className={classnames('userMenu')}>
						<Menu.Item key='/notification'>
							<NotifTrigger />
						</Menu.Item>
						<Menu.Item key='/me'>
							<ProfileTrigger />
						</Menu.Item>
					</Menu>
				</Col>
			</Row>
		</Layout.Header>
	);
};

export default withTranslation()(memo(HeaderView));
