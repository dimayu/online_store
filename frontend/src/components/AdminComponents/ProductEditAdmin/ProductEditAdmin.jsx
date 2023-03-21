import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import axios from '../../../Axios';
import { fetchProducts } from '../../../Redux/Slices/Products';
import { fetchCategories } from '../../../Redux/Slices/Categories';
import { fetchBrands } from '../../../Redux/Slices/Brands';
import { fetchGenders } from '../../../Redux/Slices/Genders';
import { fetchSeasons } from '../../../Redux/Slices/Seasons';
import { fetchCountries } from '../../../Redux/Slices/Countries';

import './ProductEditAdmin.scss';

export const ProductEditAdmin = ({}) => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.categories);
  const {brands} = useSelector(state => state.brands);
  const {genders} = useSelector(state => state.genders);
  const {seasons} = useSelector(state => state.seasons);
  const {countries} = useSelector(state => state.countries);
  const defaultCategory = (categories.status === 'loaded') ? categories.items[0].category : '';
  const defaultBrand = (brands.status === 'loaded') ? brands.items[0].brand : '';
  const defaultGender = (genders.status === 'loaded') ? genders.items[0].gender : '';
  const defaultSeasons = (seasons.status === 'loaded') ? seasons.items[0].season : '';
  const defaultCountries = (countries.status === 'loaded') ? countries.items[0].country : '';
  const [isLoading, setIsLoading] = useState(true);
  const {id} = useParams();
  const isEdite = Boolean(id);
  
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [article, setArticle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [material, setMaterial] = useState('');
  const [category, setCategory] = useState(defaultCategory);
  const [brand, setBrand] = useState(defaultBrand);
  const [gender, setGender] = useState(defaultGender);
  const [season, setSeasons] = useState(defaultSeasons);
  const [country, setCountry] = useState(defaultCountries);
  
  const inputFileRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchBrands());
    dispatch(fetchGenders());
    dispatch(fetchSeasons());
    dispatch(fetchCountries());
    if (isEdite) {
      axios
      .get(`/products/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setImg(res.data.img);
        setArticle(res.data.article);
        setCategory(res.data.category);
        setPrice(res.data.price);
        setBrand(res.data.brand);
        setDescription(res.data.description);
        setMaterial(res.data.material);
        setGender(res.data.gender);
        setSeasons(res.data.season);
        setCountry(res.data.country);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении');
      });
    }
  }, [id]);
  
  const handleFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const {data} = await axios.post('uploads', formData);
      setImg(`http://localhost:5000`+ data.url);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при загрузке картинки');
    }
  };
  
  const handleDeleteFile = () => {
    setImg('');
  };
  
  const changeCategory = (event) => {
    setCategory(event.target.value);
  };
  
  const changeBrand = (event) => {
    setBrand(event.target.value);
  };
  
  const changeGender = (event) => {
    setGender(event.target.value);
  };
  
  const changeSeason = (event) => {
    setSeasons(event.target.value);
  };
  
  const changeCountry = (event) => {
    setCountry(event.target.value);
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
        material,
        category,
        brand,
        gender,
        season,
        country,
      };
      
      const { data } = isEdite
        ? await axios.patch(`/products/${id}`, fields)
        : await axios.post('/products', fields);
      const _id = isEdite ? id : data._id;
      
      navigate(`/admin-panel/products/${_id}`);
    } catch (err) {
      console.warn(err);
      alert('Ошибка при создании товара');
    }
  };
  
    return (
      <div className="product-wrapper">
        <div className="product">
          <div className="product__title product__item">
            <p className="product__item__name">Название</p>
            <div
              className="input-block">
              <input type="text"
                     className="input-block__input"
                     value={title}
                     required
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
                <img src={img} alt={title}/>
                <button className="btn" onClick={handleDeleteFile}>Удалить картинку</button>
              </>
            )}
          </div>
          <div className="product__article product__item">
            <p className="product__item__name">Артикул</p>
            <div
              className="input-block">
              <input type="text"
                     className="input-block__input"
                     value={article}
                     required
                     onChange={(e) => setArticle(e.target.value)}
              />
              <span className="input-block__line"></span>
            </div>
          </div>
          <div className="product__category product__radio product__item">
            <p className="product__item__name">Категория</p>
            {(categories.status === 'loaded') ? categories.items.map(item => (
              <div key={item._id} className="radio-block">
                <label>
                  <input type="radio"
                         className="radio-block__input"
                         name="category"
                         id="category"
                         value={item.category}
                         checked={category === item.category}
                         onChange={changeCategory}
                  />
                  <span className="radio-block__custom-radio"></span>
                  {item.category}
                </label>
              </div>
            )) : <h4 className="not-found">Nothing found</h4>}
          </div>
          <div className="product__price product__item">
            <p className="product__item__name">Цена</p>
            <div
              className="input-block">
              <input type="text"
                     className="input-block__input"
                     value={price}
                     required
                     onChange={(e) => setPrice(e.target.value)}
              />
              <span className="input-block__line"></span>
            </div>
          </div>
          <div className="product__brand product__radio product__item">
            <p className="product__item__name">Бренд</p>
            {(brands.status === 'loaded') ? brands.items.map(item => (
              <div key={item._id} className="radio-block">
                <label>
                  <input type="radio"
                         className="radio-block__input"
                         name="brand"
                         id="brand"
                         value={item.brand}
                         checked={brand === item.brand}
                         onChange={changeBrand}
                  />
                  <span className="radio-block__custom-radio"></span>
                  {item.brand}
                </label>
              </div>
            )) : <h4 className="not-found">Nothing found</h4>}
          </div>
          <div className="product__description product__item">
            <p className="product__item__name">Описание товара</p>
            <div
              className="input-block">
            <textarea className="input-block__input"
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
              className="input-block">
              <input type="text"
                     className="input-block__input"
                     value={material}
                     required
                     onChange={(e) => setMaterial(e.target.value)}
              />
              <span className="input-block__line"></span>
            </div>
          </div>
          <div className="product__gender product__radio product__item">
            <p className="product__item__name">Пол</p>
            {(genders.status === 'loaded') ? genders.items.map(item => (
              <div key={item._id} className="radio-block">
                <label>
                  <input type="radio"
                         className="radio-block__input"
                         name="gender"
                         id="gender"
                         value={item.gender}
                         checked={gender === item.gender}
                         onChange={changeGender}
                  />
                  <span className="radio-block__custom-radio"></span>
                  {item.gender}
                </label>
              </div>
            )) : <h4 className="not-found">Nothing found</h4>}
          </div>
          <div className="product__season product__radio product__item">
            <p className="product__item__name">Сезон</p>
            {(seasons.status === 'loaded') ? seasons.items.map(item => (
              <div key={item._id} className="radio-block">
                <label>
                  <input type="radio"
                         className="radio-block__input"
                         name="season"
                         value={item.season}
                         checked={season === item.season}
                         onChange={changeSeason}
                  />
                  <span className="radio-block__custom-radio"></span>
                  {item.season}
                </label>
              </div>
            )) : <h4 className="not-found">Nothing found</h4>}
          </div>
          <div className="product__country product__radio product__item">
            <p className="product__item__name">Страна производитель</p>
            {(countries.status === 'loaded') ? countries.items.map(item => (
              <div key={item._id} className="radio-block">
                <label>
                  <input type="radio"
                         className="radio-block__input"
                         name="country"
                         value={item.country}
                         checked={country === item.country}
                         onChange={changeCountry}
                  />
                  <span className="radio-block__custom-radio"></span>
                  {item.country}
                </label>
              </div>
            )) : <h4 className="not-found">Nothing found</h4>}
          </div>
        </div>
        <button className="btn btn-save-product" onClick={onSubmit}>
          {isEdite ? `Обновить` : `Создать`}
        </button>
      </div>
    )
};