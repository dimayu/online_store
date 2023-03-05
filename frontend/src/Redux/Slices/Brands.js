import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../Axios';

export const fetchBrands = createAsyncThunk('products/fetchBrands', async () => {
  const { data } = await axios.get('/brands');
  return data;
});

const initialState = {
  brands: {
      items: [],
      status: 'loading',
    }
};

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBrands.pending]: (state) => {
      state.brands.items = [];
      state.brands.status = 'loading';
    },
    [fetchBrands.fulfilled]: (state, action) => {
      state.brands.items = action.payload;
      state.brands.status = 'loaded';
    },
    [fetchBrands.rejected]: (state) => {
      state.brands.items = [];
      state.brands.status = 'error';
    }
  }
});

export const brandsReducer = brandsSlice.reducer;