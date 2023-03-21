import { Route, Routes, Outlet } from 'react-router-dom';

import { ProductsAdmin, ProductEditAdmin } from '../index';

import './MainAdmin.scss';

export const MainAdmin = () => {
  return (
    <div className="main-admin">
      <Routes>
        <Route path="products" element={<ProductsAdmin/>}/>
        <Route path="products/:id" element={<ProductEditAdmin/>}/>
        <Route path="products/create" element={<ProductEditAdmin/>}/>
      </Routes>
      <Outlet/>
    </div>
  );
};