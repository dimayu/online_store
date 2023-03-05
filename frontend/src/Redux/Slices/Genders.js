import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../Axios';

export const fetchGenders = createAsyncThunk('products/fetchGenders', async () => {
  const { data } = await axios.get('/genders');
  return data;
});

const initialState = {
  genders: {
      items: [],
      status: 'loading',
    }
};

const gendersSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGenders.pending]: (state) => {
      state.genders.items = [];
      state.genders.status = 'loading';
    },
    [fetchGenders.fulfilled]: (state, action) => {
      state.genders.items = action.payload;
      state.genders.status = 'loaded';
    },
    [fetchGenders.rejected]: (state) => {
      state.genders.items = [];
      state.genders.status = 'error';
    }
  }
});

export const gendersReducer = gendersSlice.reducer;