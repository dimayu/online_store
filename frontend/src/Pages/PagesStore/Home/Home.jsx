import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../../Redux/Slices/Products';

export const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  
  return (
    <div>fsdfd</div>
  );
}