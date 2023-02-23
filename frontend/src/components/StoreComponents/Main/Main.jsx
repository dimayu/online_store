import { Routes, Route } from "react-router-dom";
import { Home } from '../../../Pages';

import './Main.scss';
import { Header } from '../Header';

export const Main = () => {
    return (
        <>
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home/>}/>
              {/*<Route path="genres" element={<PageGenres/>}/>*/}
              {/*<Route path=":categories" element={<PageCategories/>}/>*/}
              {/*<Route path="movies/:movieId" element={<PageMovie/>}/>*/}
              {/*<Route path=":categories/movies/:movieId" element={<PageMovie/>}/>*/}
            </Routes>
          </main>
        </>
    );
};