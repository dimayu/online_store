import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../Axios';

export const fetchCountries = createAsyncThunk('products/fetchCountries', async () => {
  const { data } = await axios.get('/countries');
  return data;
});

const initialState = {
  countries: {
      items: [],
      status: 'loading',
    }
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCountries.pending]: (state) => {
      state.countries.items = [];
      state.countries.status = 'loading';
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.countries.items = action.payload;
      state.countries.status = 'loaded';
    },
    [fetchCountries.rejected]: (state) => {
      state.countries.items = [];
      state.countries.status = 'error';
    }
  }
});

export const countriesReducer = countriesSlice.reducer;