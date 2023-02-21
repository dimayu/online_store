import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchProducts } from '../../../Redux/Slices/Products';

export const Admin = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  
  return (
    <>
      fdsf
    </>
  );
}