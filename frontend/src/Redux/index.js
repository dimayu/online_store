import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';

import { productsReducer } from './Slices/Products'
import { authReducer } from './Slices/Auth';

const store = {
  reducer: {
    products: productsReducer,
    auth: authReducer,
  },
};

export const stores = configureStore(store, composeWithDevTools());