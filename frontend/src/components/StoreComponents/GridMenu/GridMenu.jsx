import './GridMenu.scss';

export const GridMenu = () => {
  
  return (
    <div className="wrapper">
      <div className="grid-menu">
        <a className="grid-menu__item">
          <img src="/img/menu/pic-1.jpg" alt="pic" className="grid-menu__item__img"/>
          <div className="grid-menu__item__text">
            <h3>Фетровые шляпы</h3>
          </div>
        </a>
        <a className="grid-menu__item">
          <img src="/img/menu/pic-2.jpg" alt="pic" className="grid-menu__item__img"/>
          <div className="grid-menu__item__text">
            <h3>Шапки ушанки</h3>
          </div>
        </a>
        <a className="grid-menu__item">
          <img src="/img/menu/pic-3.jpg" alt="pic" className="grid-menu__item__img"/>
          <div className="grid-menu__item__text">
            <h3>Фуражки</h3>
          </div>
        </a>
        <a className="grid-menu__item">
          <img src="/img/menu/pic-4.jpg" alt="pic" className="grid-menu__item__img"/>
          <div className="grid-menu__item__text">
            <h3>Шапки</h3>
          </div>
        </a>
        <a className="grid-menu__item">
          <img src="/img/menu/pic-5.jpg" alt="pic" className="grid-menu__item__img"/>
          <div className="grid-menu__item__text">
            <h3>Бейсболки</h3>
          </div>
        </a>
        <a className="grid-menu__item">
          <img src="/img/menu/pic-6.jpg" alt="pic" className="grid-menu__item__img"/>
          <div className="grid-menu__item__text">
            <h3>Кепки</h3>
          </div>
        </a>
        <a className="grid-menu__item">
          <img src="/img/menu/pic-7.jpg" alt="pic" className="grid-menu__item__img"/>
          <div className="grid-menu__item__text">
            <h3>Береты</h3>
          </div>
        </a>
        <a className="grid-menu__item">
          <img src="/img/menu/pic-8.jpg" alt="pic" className="grid-menu__item__img"/>
          <div className="grid-menu__item__text">
            <h3>Кепка Шерлок</h3>
          </div>
        </a>
      </div>
    </div>
  );
};