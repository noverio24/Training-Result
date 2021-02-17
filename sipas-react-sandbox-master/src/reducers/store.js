import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from './rootReducer';

const persistConfig = {
	key: 'root',
	storage
};

const store = configureStore({
	reducer: persistReducer(persistConfig, rootReducer),
	middleware: [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
	]
});
const persistor = persistStore(store);

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('reducers/rootReducer', () => {
      // This fetch the new state of the above reducers.
      const nextRootReducer = require('reducers/rootReducer').default
      store.replaceReducer(
        persistReducer(persistConfig, nextRootReducer)
      )
    })
  }


export type AppDispatch = typeof store.dispatch;

export { persistor, PersistGate };

export default store;
