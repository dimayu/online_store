import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAuth, selectIsAuth } from '../../../Redux/Slices/Auth';

import './AdminEntry.scss';

export const AdminEntry = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  
  const {register, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  
  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      return alert('Не удалось авторизоваться');
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };
  
  if (isAuth) {
    return <Navigate to="/admin-panel"/>;
  }
  
  return (
    <form className="form-entry" onSubmit={handleSubmit(onSubmit)}>
      <div
        className="form-entry__input input-block">
        <input type="email" className="input-block__input"
               {...register('email', {require: 'Введите почту'})}
               required
        />
        <label className="input-block__label">Ваша почта</label>
        <span className="input-block__line"></span>
      </div>
      <div className="form-entry__input input-block">
        <input type="text" className="input-block__input" required
               {...register('password', {require: 'Введите пароль'})}
        />
        <label className="input-block__label">Ваш пароль</label>
        <span className="input-block__line"></span>
      </div>
      <button type="submit" className="btn form-entry__btn">Войти</button>
    </form>
  );
};