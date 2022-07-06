import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import GameStore from './Game.store';
import PlayerStore from './Player.store';
import AdversariesStore from './Adversaries.store';

const reducers = combineReducers({
  game: GameStore,
  player: PlayerStore,
  adversaries: AdversariesStore
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
