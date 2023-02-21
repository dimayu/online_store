import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../Axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { data } = await axios.get('/products');
  return data;
});

const initialState = {
    items: [],
    status: 'loading',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.items = [];
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'loaded';
    },
    [fetchProducts.rejected]: (state) => {
      state.items = [];
      state.status = 'error';
    }
  }
});

export const productsReducer = productsSlice.reducer;