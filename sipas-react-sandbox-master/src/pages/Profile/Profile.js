// @flow
import React, { memo, lazy } from 'react';
import { withHome, NotFound } from 'viewport';
import { connect, selectUsername } from 'reducers/Session';
import ProfileView from './ProfileView';
import DefaultPage from './DefaultPage';
import {
	UserOutlined,
	TeamOutlined,
	UsergroupAddOutlined,
	DatabaseOutlined
} from '@ant-design/icons';

type Props = {
	username?: string,
};

const leftMenu = [
	{ title: 'menu.profile.PROFILE', route: '/profile', component: lazy(() => import('pages/profileDetail')), icon: <UserOutlined /> },
	{ title: 'menu.profile.ASISTEN', route: '/asisten',  component: lazy(() => import('pages/asisten_profile')), icon: <TeamOutlined /> },
	{ title: 'menu.profile.PIMPINAN', route: '/pimpinan',  component: lazy(() => import('pages/pimpinan_profile')), icon: <TeamOutlined /> },
	{ title: 'menu.profile.UNIT_KEWENANGAN', route: '/unit',  component: lazy(() => import('pages/unitkewenangan_profile')), icon: <DatabaseOutlined /> },
	{ title: 'menu.profile.KELOMPOK', route: '/kelompok', icon: <UsergroupAddOutlined /> },
];

const routes = [].concat(
	[{path: '/', exact: true, component: DefaultPage}],
	[...leftMenu].map(({ route, exact, component}) => ({
		exact,
		path: route,
		component: component || NotFound
	}))
)

const Profile = ({ username, ...props }: Props) => {
	return(
		<ProfileView 
		name={12}
		routes={routes}
		leftMenu={leftMenu}
		{...props}
		/>
	);
};

const mapState = state => ({
	username: selectUsername(state),
});

export default withHome(connect(mapState, null)(memo(Profile)));
