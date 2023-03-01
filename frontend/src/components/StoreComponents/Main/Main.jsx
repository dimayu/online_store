import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from '../../../Pages';

import './Main.scss';
import { Header } from '../Header';

export const Main = () => {
    return (
        <BrowserRouter>
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </main>
        </BrowserRouter>
    );
};