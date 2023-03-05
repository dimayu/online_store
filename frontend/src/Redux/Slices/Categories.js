import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../Axios';

export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
  const { data } = await axios.get('/categories');
  return data;
});

const initialState = {
    categories: {
      items: [],
      status: 'loading',
    }
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.categories.items = [];
      state.categories.status = 'loading';
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories.items = action.payload;
      state.categories.status = 'loaded';
    },
    [fetchCategories.rejected]: (state) => {
      state.categories.items = [];
      state.categories.status = 'error';
    }
  }
});

export const categoriesReducer = categoriesSlice.reducer;