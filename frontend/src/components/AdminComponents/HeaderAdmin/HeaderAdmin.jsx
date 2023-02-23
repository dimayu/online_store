import { useDispatch } from 'react-redux';
import { AiOutlineUser } from "react-icons/ai";

import './HeaderAdmin.scss';
import { logout } from '../../../Redux/Slices/Auth';

export const HeaderAdmin = () => {
  const dispatch = useDispatch();
  
  const onClickLogout = () => {
    if (window.confirm('Вы уверены, что хотите выйти?')) {
      dispatch(logout());
    }
  }
  
  return (
    <header className="header-admin">
      <div className="wrapper">
        <div className="header-admin__items">
          <div className="header-admin__items__item header-admin__items__logo">
            <img src="logo.svg" alt="logo"/>
          </div>
          <div className="header-admin__items__item header-admin__items__right">
            <button className="btn" onClick={onClickLogout}>
              Выйти
            </button>
            <div className="header-admin__items__right--user">
              <AiOutlineUser/>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}