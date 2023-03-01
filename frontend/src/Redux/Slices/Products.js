import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../Axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { data } = await axios.get('/products');
  return data;
});

const initialState = {
    products: {
      items: [],
      status: 'loading',
    }
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.products.items = [];
      state.products.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products.items = action.payload;
      state.products.status = 'loaded';
    },
    [fetchProducts.rejected]: (state) => {
      state.products.items = [];
      state.products.status = 'error';
    }
  }
});

export const productsReducer = productsSlice.reducer;