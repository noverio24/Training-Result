import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import rootReducer from './rootReducer';

const engine = createEngine('data');
const persistentMiddleware = storage.createMiddleware(engine);
const load = storage.createLoader(engine);

const store = configureStore({
	reducer: rootReducer,
	middleware: [...getDefaultMiddleware(), persistentMiddleware]
});
load(store)
	.then(newState => console.log('Loaded state:', newState))
	.catch(() => console.log('Failed to load previous state'));

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./rootReducer', () => {
		const newRootReducer = require('./rootReducer').default;
		store.replaceReducer(newRootReducer);
	});
}

export type AppDispatch = typeof store.dispatch;

export default store;
