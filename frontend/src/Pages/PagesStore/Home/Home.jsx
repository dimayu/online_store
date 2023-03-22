import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchProducts } from '../../../Redux/Slices/Products';
import { Footer, Header, Main } from '../../../Components';

export const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}