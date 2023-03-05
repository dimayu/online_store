import { Link } from 'react-router-dom';

import './ProductAdmin.scss';

export const ProductAdmin = ({ item }) => {
  
  return (
    <Link to={`product/${item._id}`} className="products__item">
      <div className="products__item__img">
        <img src={(item.img.includes('http')) ? item.img : `http://localhost:5000${item.img}`} alt={item.title} width="40" height="40"/>
      </div>
      <div className="products__item__art">{item.article}</div>
      <div className="products__item__title">{item.title}</div>
      <div className="products__item__cat">{item.category}</div>
    </Link>
  );
}