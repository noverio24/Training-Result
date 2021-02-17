// @flow
import React, { memo, useState, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { message as Message } from 'antd';
import { connect } from 'react-redux';
import Session from 'reducers/Session';
import LoginFormView from './LoginFormView';
import Authenticator from 'system/Authenticator';

const LoginForm = ({
	authSucceed,
	authFailed,
	tokenUpdated,
	dataUpdated,

	...props
}) => {
	const location = useLocation();
	const history = useHistory();
	const { from } = location.state || { from: { pathname: '/' } };

	const [loading, setLoading] = useState(false);

	const handleAuth = useCallback(
		({ username, password }) => {
			setLoading(true);
			Authenticator.check(username, password)
				.then(({ token, data }) => {
					authSucceed({
						token,
						data,
					}); // cast
					history.replace(from);
				})
				.catch(({ message }) => {
					setLoading(false);
					authFailed(); // cast
					Message.error(message);
					history.replace(from);
				});
		},
		[authSucceed, history, from, authFailed]
	);

	return <LoginFormView loading={loading} handleAuth={handleAuth} />;
};

const mapActions = Session.actions;

export default connect(null, mapActions)(memo(LoginForm));
