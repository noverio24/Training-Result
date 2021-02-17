import React, { memo } from 'react';
import { Page } from 'viewport';
import LoginPassword from './LoginPassword';

import './DoorView.scss';

const DoorView = ({ handleAuth, isLoading }) => (
	<Page name='DoorView' centerContent>
		<LoginPassword />
	</Page>
);

DoorView.propTypes = {};
DoorView.defaultProps = {};

export default memo(DoorView);
