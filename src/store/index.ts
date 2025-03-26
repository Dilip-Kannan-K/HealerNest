
import { configureStore } from '@reduxjs/toolkit';
import therapistReducer from './therapistSlice';
import sessionReducer from './sessionSlice';

export const store = configureStore({
  reducer: {
    therapist: therapistReducer,
    session: sessionReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
