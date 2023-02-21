import { configureStore } from '@reduxjs/toolkit';
import { greetingSlice } from '../features/greetings/greetingSlice';

export const store = configureStore({
  reducer: {
    greeting: greetingSlice.reducer,
  },
});

export default store;
