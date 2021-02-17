import React, { memo, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Authenticator from 'system/Authenticator';
import Session from 'reducers/Session';
import LogoutButtonView from './LogoutButtonView';

const LogoutButton = ({ sessionTerminated, renewData, renewToken, ...props }) => {
	let history = useHistory();
	const [isLoading, setLoading] = useState(false);
	const handleLogout = useCallback(()=>{
		setLoading(true);
		Authenticator.signout(() => {
			setLoading(false);
			sessionTerminated(); // cast
			history.push('/');
		});
	}, [history, sessionTerminated]);

	return <LogoutButtonView isLoading={isLoading} handleLogout={handleLogout}/>;
};

const mapActions = Session.actions;

export default connect(null, mapActions)(memo(LogoutButton));
