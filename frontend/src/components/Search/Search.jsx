import { useState, useEffect } from 'react';

import './Search.scss';

export const Search = ({ value }) => {
  const [valueSearch, setValueSearch] = useState('');
  
  useEffect(() => {
    value(valueSearch);
  }, [valueSearch]);
  
  return (
    <div className="filters__search">
      <div
        className="input-block">
        <input type="text"
               className="input-block__input"
               onChange={(e) => setValueSearch(e.target.value)}
               required
        />
        <span className="input-block__line"></span>
        <label className="input-block__label">Найти по названию</label>
      </div>
    </div>
  );
};