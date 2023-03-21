import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchRemoveProduct } from '../../../Redux/Slices/Products';
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";

import './ProductAdmin.scss';

export const ProductAdmin = ({ item }) => {
  const dispatch = useDispatch();
  const id = item._id
  
  const onClickRemove = () => {
    if (window.confirm('Вы уверены, что хотите удалить товар?')) {
      dispatch(fetchRemoveProduct(id));
    }
  }
  
  return (
    <div className="products__item">
      <div className="products__item__img">
        <img src={item.img} alt={item.title} width="40" height="40"/>
      </div>
      <div className="products__item__art">{item.article}</div>
      <div className="products__item__title">{item.title}</div>
      <div className="products__item__cat">{item.category}</div>
      <Link to={item._id} className="products__item__view">
        <AiOutlineEye />
      </Link>
      <button className="products__item__delete" onClick={onClickRemove}>
        <AiFillDelete />
      </button>
    </div>
  );
}