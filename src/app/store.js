import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { greetingSlice } from '../features/greetings/greetingSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    greeting: greetingSlice.reducer,
  },
});
