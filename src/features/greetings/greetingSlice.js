import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRandomGreeting } from './greetingAPI';

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: 'Wait for it ........',
  },
  reducers: {
    setGreeting: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRandomGreeting.fulfilled, (state, action) => {
      state.message = action.payload;
    }).addCase(getRandomGreeting.pending, (state) => {
      state.message = 'PENDIND.............'
    }).addCase(getRandomGreeting.rejected, (state) => {
      state.message = 'REJECTED............'
    });
  },
});

export const getRandomGreeting = createAsyncThunk(
    'greeting/getRandomGreeting',
    async () => {
      const response = await fetchRandomGreeting();
      console.log(response)
      return response;
    }
  );


