import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from '../../../Axios';

import './ProductEditAdmin.scss';

export const ProductEditAdmin = ({  }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении')
      });
  }, []);
  
  if (isLoading) {
    return <p>Loading</p>
  }
  
  return (
    <div className="product">
      <div>{data.title}</div>
    </div>
  );
}