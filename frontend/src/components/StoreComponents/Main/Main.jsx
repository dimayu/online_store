import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from '../../../Pages';
import { Header } from '../../../Components/index';

import './Main.scss';

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