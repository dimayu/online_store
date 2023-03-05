import { Route, Routes, Outlet } from 'react-router-dom';

import { ProductsAdmin, ProductEditAdmin } from '../index';

import './MainAdmin.scss';

export const MainAdmin = () => {
  return (
    <div className="main-admin">
      <Routes>
        <Route path="products" element={<ProductsAdmin/>}/>
        <Route path="products/product/:id" element={<ProductEditAdmin/>}/>
        <Route path="products/product/create" element={<ProductEditAdmin/>}/>
      </Routes>
      <Outlet/>
    </div>
  );
};