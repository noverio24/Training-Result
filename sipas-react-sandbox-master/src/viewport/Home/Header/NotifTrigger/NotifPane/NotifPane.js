import React, { memo } from 'react';
import NotifPaneView from './NotifPaneView';

const NotifPane = props => {
	return <NotifPaneView {...props} />;
};

export default memo(NotifPane);
