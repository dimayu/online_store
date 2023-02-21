import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';

import { productsReducer } from './Slices/Products'

const store = {
  reducer: {
    products: productsReducer,
  },
};

export const stores = configureStore(store, composeWithDevTools());