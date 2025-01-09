import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './slice/token-slice';
import { api } from './api';


const store = configureStore({
  reducer: {
    token: tokenReducer,
    [api.reducerPath]: api.reducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;