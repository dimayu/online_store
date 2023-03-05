import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import axios from '../../../Axios';
import { fetchProducts } from '../../../Redux/Slices/Products';
import { fetchCategories } from '../../../Redux/Slices/Categories';
import { fetchBrands } from '../../../Redux/Slices/Brands';

import './ProductEditAdmin.scss';
import { fetchGenders } from '../../../Redux/Slices/Genders';
import { fetchSeasons } from '../../../Redux/Slices/Seasons';
import { fetchCountries } from '../../../Redux/Slices/Countries';

export const ProductEditAdmin = ({}) => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.categories);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();
  const [title, setTitle] = useState();
  const [img, setImg] = useState();
  const [article, setArticle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [material, setMaterial] = useState();
  const inputFileRef = useRef(null);
  const navigate = useNavigate();
  
  const handleFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const {data} = await axios.post('uploads', formData);
      setImg(data.url);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при загрузке картинки');
    }
  };
  
  const onSubmit = async () => {
    try {
      setIsLoading(true);
      
      const fields = {
        title,
        img,
        article,
        price,
        description,
        material
      };
      
      const {data} = await axios.post('/products', fields);
      const id = data._id;
      
      navigate(`/admin-panel/products/product/${id}`);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при создании товара');
    }
  };
  
  const isEdite = Boolean(id);
  
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
    dispatch(fetchGenders());
    dispatch(fetchSeasons());
    dispatch(fetchCountries());
    if (isEdite) {
      axios
      .get(`/products/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении');
      });
    }
  }, []);
  
  if (isEdite) {
    return <p>Loading</p>;
  }
  
  return (
    <>
      <button className="btn" onClick={onSubmit}>Сохранить</button>
      <div className="product">
        <div className="product__title product__item">
          <p className="product__item__name">Название</p>
          <div
            className="form-entry__input input-block">
            <input type="text"
                   className="input-block__input"
                   required
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}
            />
            <span className="input-block__line"></span>
          </div>
        </div>
        <div className="product__img product__item">
          <p className="product__item__name">Картинка</p>
          {!img &&
            <button
              onClick={() => inputFileRef.current.click()}
              className="btn"
            >Загрузить картинку</button>
          }
          <input
            type="file"
            onChange={handleFile}
            ref={inputFileRef}
            hidden/>
          {img && (
            <>
              <button className="btn">Удалить картинку</button>
              <img src={`http://localhost:5000${img}`} alt="img"/>
            </>
          )}
        </div>
        <div className="product__article product__item">
          <p className="product__item__name">Артикул</p>
          <div
            className="form-entry__input input-block">
            <input type="text"
                   className="input-block__input"
                   required
                   value={article}
                   onChange={(e) => setArticle(e.target.value)}
            />
            <span className="input-block__line"></span>
          </div>
        </div>
        <div className="product__category product__item">
          <p className="product__item__name">Категория</p>
          {(categories.status === 'loaded') ? categories.items.map(item => (
            <div key={item._id}>{item.category}</div>
          )) : <h4 className="not-found">Nothing found</h4>}
        </div>
        <div className="product__price product__item">
          <p className="product__item__name">Цена</p>
          <div
            className="form-entry__input input-block">
            <input type="text"
                   className="input-block__input"
                   required
                   value={price}
                   onChange={(e) => setPrice(e.target.value)}
            />
            <span className="input-block__line"></span>
          </div>
        </div>
        <div className="product__description product__item">
          <p className="product__item__name">Описание товара</p>
          <div
            className="form-entry__input input-block">
            <textarea type="text"
                   className="input-block__input"
                   required
                   value={description}
                   onChange={(e) => setDescription(e.target.value)}
            />
            <span className="input-block__line"></span>
          </div>
        </div>
        <div className="product__material product__item">
          <p className="product__item__name">Материал</p>
          <div
            className="form-entry__input input-block">
            <input type="text"
                   className="input-block__input"
                   required
                   value={material}
                   onChange={(e) => setMaterial(e.target.value)}
            />
            <span className="input-block__line"></span>
          </div>
        </div>
      </div>
    </>
  );
};