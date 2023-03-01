import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { fetchProducts } from '../../../Redux/Slices/Products';
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
  }, []);
  
  const isProductsLoading = products.status === 'loading';
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProducts = products.items.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  const searchHandler = (value) => setValue(value);
  const filteredProducts = products.items.filter(item => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });
  
  return (
    <>
      <div className="filters">
      <Search value={searchHandler}/>
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
          : (value !== '')
            ? filteredProducts
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
          totalPosts={products.items.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};