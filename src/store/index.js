import { configureStore } from '@reduxjs/toolkit'
import postReducer from "./PostReducer"
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const persistConfig = {
  key: 'posts',
  storage,
};

const postPersistedReducer = persistReducer(persistConfig, postReducer)

// to create a redux store
const store = configureStore({
  reducer: {
    postReducer: postPersistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store