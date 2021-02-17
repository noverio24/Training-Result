import React, { memo } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectAuthenticated } from 'reducers/Session';
import HomeView from './HomeView';

const Home = ({ authenticated, ...props }) => {
	return !!authenticated ? <HomeView {...props} /> : <Redirect to='/login' />;
};

const mapState = state => ({
	authenticated: selectAuthenticated(state)
});

export default connect(mapState, null)(memo(Home));
