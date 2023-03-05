import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';

import { productsReducer } from './Slices/Products'
import { authReducer } from './Slices/Auth';
import { categoriesReducer } from './Slices/Categories';
import { brandsReducer } from './Slices/Brands';
import { gendersReducer } from './Slices/Genders';
import { seasonsReducer } from './Slices/Seasons';
import { countriesReducer } from './Slices/Countries';

const store = {
  reducer: {
    products: productsReducer,
    auth: authReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
    genders: gendersReducer,
    seasons: seasonsReducer,
    countries: countriesReducer,
  },
};

export const stores = configureStore(store, composeWithDevTools());