import { Route, Routes } from 'react-router-dom';

import { AdminEntry, AdminPanel, Home } from '../../Pages';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin-entry" element={<AdminEntry/>}/>
        <Route path="/admin-panel" element={<AdminPanel/>}/>
      </Routes>
    </div>
  );
};
