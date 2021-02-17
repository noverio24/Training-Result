import React, { memo } from 'react';
import classnames from 'classnames';
import { Avatar, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ProfileMenu from './ProfileMenu';
import './ProfileTriggerView.scss';

const menu = <ProfileMenu />;

type Props = {
	url?: string,
};

const ProfileTriggerView = ({ url, ...props }: Props) => (
	<Dropdown trigger={['hover']} overlay={menu}>
		<Avatar
			src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" 
			// icon={<UserOutlined />}
			size='medium'
			className={classnames('ProfileTriggerView')}
		/>
	</Dropdown>
);

export default memo(ProfileTriggerView);
