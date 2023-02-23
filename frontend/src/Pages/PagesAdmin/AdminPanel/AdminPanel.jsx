import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../../Redux/Slices/Auth';

import { HeaderAdmin } from '../../../Components/index';

import './AdminPanel.scss';

export const AdminPanel = () => {
  const isAuth = useSelector(selectIsAuth);
  
  if (!isAuth) {
    return <Navigate to="/admin-entry"/>;
  }
  
  return (
    <HeaderAdmin/>
  );
};