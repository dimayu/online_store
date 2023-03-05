import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../Axios';

export const fetchSeasons = createAsyncThunk('products/fetchSeasons', async () => {
  const { data } = await axios.get('/seasons');
  return data;
});

const initialState = {
  seasons: {
      items: [],
      status: 'loading',
    }
};

const seasonsSlice = createSlice({
  name: 'seasons',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSeasons.pending]: (state) => {
      state.seasons.items = [];
      state.seasons.status = 'loading';
    },
    [fetchSeasons.fulfilled]: (state, action) => {
      state.seasons.items = action.payload;
      state.seasons.status = 'loaded';
    },
    [fetchSeasons.rejected]: (state) => {
      state.seasons.items = [];
      state.seasons.status = 'error';
    }
  }
});

export const seasonsReducer = seasonsSlice.reducer;