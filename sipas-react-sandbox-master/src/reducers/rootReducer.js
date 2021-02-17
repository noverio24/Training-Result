import { combineReducers } from '@reduxjs/toolkit';
import Session from './Session';

const rootReducer = combineReducers({
	[Session.name]: Session.reducer
})

export default rootReducer;