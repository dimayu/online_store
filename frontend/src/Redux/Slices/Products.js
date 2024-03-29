import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../Axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const { data } = await axios.get('/products');
  return data;
});

export const fetchRemoveProduct = createAsyncThunk('products/fetchRemoveProduct', async (id) => {
  await axios.delete(`/products/${id}`);
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
    //Getting
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
    },
    //Remove
    [fetchRemoveProduct.pending]: (state, action) => {
      state.products.items = state.products.items.filter(obj => obj._id !== action.payload);
    },
  }
});

export const productsReducer = productsSlice.reducer;