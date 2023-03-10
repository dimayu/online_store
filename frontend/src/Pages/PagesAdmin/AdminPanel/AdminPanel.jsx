import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAuth } from '../../../Redux/Slices/Auth';
import { HeaderAdmin, MainAdmin, SideBar } from '../../../Components/index';

import './AdminPanel.scss';

export const AdminPanel = () => {
  const isAuth = useSelector(selectIsAuth);
  
  if (!window.localStorage.getItem('token') && !isAuth) {
    return <Navigate to="/admin-entry"/>;
  }
  
  return (
    <>
      <HeaderAdmin/>
      <main className="main">
        <SideBar/>
        <MainAdmin />
      </main>
    </>
  );
};