import { Link } from 'react-router-dom';

import { AiFillAppstore, AiOutlineShoppingCart, AiFillGold, AiOutlineTeam } from "react-icons/ai";

import './SideBar.scss';

export const SideBar = () => {
  return (
    <aside className="aside">
      <ul className="aside__list">
        <li className="aside__list__item">
          <Link to="products" className="aside__list__item--link">
            <AiFillAppstore/>
            <span>Товары</span>
          </Link>
        </li>
        <li className="aside__list__item">
          <a href="" className="aside__list__item--link">
            <AiOutlineShoppingCart/>
            <span>Заказы</span>
          </a>
        </li>
        <li className="aside__list__item">
          <a href="" className="aside__list__item--link">
            <AiFillGold/>
            <span>Категории</span>
          </a>
        </li>
        <li className="aside__list__item">
          <a href="" className="aside__list__item--link">
            <AiOutlineTeam/>
            <span>Клиенты</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}