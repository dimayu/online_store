import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthMe } from '../../Redux/Slices/Auth';

import { AdminEntry, AdminPanel, Home } from '../../Pages';

import './App.scss';

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin-entry" element={<AdminEntry/>}/>
        <Route path="/admin-panel/*" element={<AdminPanel/>} />
      </Routes>
    </div>
  );
};
