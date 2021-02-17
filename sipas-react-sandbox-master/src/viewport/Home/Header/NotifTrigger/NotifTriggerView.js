import React, { memo } from 'react';
import classnames from 'classnames';
import { Dropdown, Avatar } from 'antd';
import { BellFilled, BellOutlined } from '@ant-design/icons';

import NotifPane from './NotifPane';

import './NotifTriggerView.scss';

const NotifTriggerView = ({ active, ...props }) => (
	<Dropdown trigger={['hover']} overlay={<NotifPane />}>
		<Avatar
			{...props}
			icon={active ? <BellFilled /> : <BellOutlined />}
			size='medium'
			className={classnames('NotifTriggerView', {
				active: active
			})}
		/>
	</Dropdown>
);

NotifTriggerView.propTypes = {};
NotifTriggerView.defaultProps = {};

export default memo(NotifTriggerView);
