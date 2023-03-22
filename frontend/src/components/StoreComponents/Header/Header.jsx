import { Link } from 'react-router-dom';

import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__items">
          <Link to="/" className="header__items__logo">
            <img src="/logo.svg" alt="logo"/>
          </Link>
          <nav className="header__items__nav">
            <ul className="header__items__nav__ul">
              <li className="header__items__nav__ul--item"><Link to="/">Мужчинам</Link></li>
              <li className="header__items__nav__ul--item"><Link to="/">Женщинам</Link></li>
              <li className="header__items__nav__ul--item"><Link to="/">Бренды</Link></li>
              <li className="header__items__nav__ul--item"><Link to="/">Оплата</Link></li>
            </ul>
          </nav>
          <div className="header__items__right">
            <button className="header__items__right--item">
              <AiOutlineSearch/>
            </button>
            <button className="header__items__right--item">
              <AiOutlineUser/>
            </button>
            <button className="header__items__right--item header__items__right--cart">
              <AiOutlineShoppingCart/>
              <div className="header__items__right--cart-num">0</div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};