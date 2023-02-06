import { Link } from 'react-router-dom'

import './Header.scss';

export const Header = () => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__items">
                    <Link to="/" className="header__items__logo">Movies</Link>
                </div>
            </div>
        </header>
    );
};