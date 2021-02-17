import React, { memo, useState, useEffect } from 'react';
import NotifTriggerView from './NotifTriggerView';

const NotifTrigger = props => {
	const [active, setActive] = useState(false);

	useEffect(()=>{
		const timer = setTimeout(() => {
			setActive(true);
		}, 2000);

		return () => {
			clearTimeout(timer);
		}
	},[]);

	return <NotifTriggerView active={active} {...props}/>;
};

export default memo(NotifTrigger);