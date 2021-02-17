import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectAuthenticated } from 'reducers/Session';
import DoorView from './DoorView';

const Door = ({ authenticated, ...props }) => {
	return !authenticated ? <DoorView {...props} /> : <Redirect to='/' />;
};

const mapState = state => ({
	authenticated: selectAuthenticated(state)
});

export default connect(mapState, null)(memo(Door));
