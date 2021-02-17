// @flow
import { connect } from 'react-redux';
import { createSlice, createSelector } from '@reduxjs/toolkit';

type succeedPayload = {
	token: string,
	data: {},
	asu: tring
};

const Session = createSlice({
	name: 'Session',
	initialState: {
		authenticated: false,
		token: null,
		data: null,
	},
	reducers: {
		authSucceed: (state, { payload }) => {
			state.authenticated = true;
			state.data = payload.data;
			state.token = payload.token;
		},
		authFailed: (state, action: { payload: succeedPayload }) => {
			state.authenticated = false;
			state.token = null;
			state.data = null;
		},
		sessionTerminated: state => {
			state.authenticated = false;
			state.token = null;
			state.data = null;
		},
		dataUpdated: (state, { payload }) => {
			state.data = payload;
		},
		tokenUpdated: (state, { payload }) => {
			state.token = payload;
		},
	},
});

// selectors
const select = createSelector([({ [Session.name]: state }) => state], v => v);
const selectAuthenticated = createSelector(
	[({ [Session.name]: state }) => state.authenticated],
	v => v
);
const selectUsername = createSelector(
	[({ [Session.name]: state }) => state.username],
	v => v
);
const selectProfilePictureUrl = createSelector(
	[({ [Session.name]: state }) => state.data.profilePictureUrl],
	v => v
);

// re export redux connect
export { connect };

// export selctor
export { select, selectAuthenticated, selectUsername, selectProfilePictureUrl };

// reducer
export default Session;
