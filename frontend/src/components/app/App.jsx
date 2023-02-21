import { Routes, Route } from "react-router-dom";

import { Admin } from '../index';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/products" element={<Admin/>}/>
        </Routes>
    </div>
  );
};
