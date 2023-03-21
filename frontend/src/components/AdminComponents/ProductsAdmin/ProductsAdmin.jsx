import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchProducts } from '../../../Redux/Slices/Products';
import { fetchCategories } from '../../../Redux/Slices/Categories';
import { Pagination, ProductAdmin, Search } from '../../../Components/index';

import './ProductsAdmin.scss';

export const ProductsAdmin = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [value, setValue] = useState('');
  
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  },[dispatch]);
  
  const isProductsLoading = products.status === 'loading';
  
  const filteredProducts = products.items.filter(item => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  const searchHandler = (value) => setValue(value);
  
  return (
    <>
      <div className="filters">
        <Search value={searchHandler}/>
        <Link to="create" className="btn">
          Создать товар
        </Link>
      </div>
      <div className="products">
        <div className="products__item products__item--header">
          <div className="products__item__img">
            <span>Изображение</span>
          </div>
          <div className="products__item__art products__item__content">
            <span>Артикул</span>
          </div>
          <div className="products__item__title products__item__content">
            <span>Название</span>
          </div>
          <div className="products__item__cat products__item__content">
            <span>Категория</span>
          </div>
        </div>
        {(isProductsLoading
          ? [...Array(5)]
          : currentProducts).map((item, index) =>
          isProductsLoading ? (
            <div key={index}></div>
          ) : (
            (
              <ProductAdmin item={item} key={item._id}/>
            )
          )
        )}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredProducts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};