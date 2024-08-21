// import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import './scss/app.scss';
import Header from './components/Header';

import db from '../server/db.json';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFounder from "./pages/NotFounder";
import { useState } from "react";


function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <>
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className="content">
          
            <Routes>
              <Route path="/" element={<Home searchValue={searchValue} />}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="*" element={<NotFounder/>}/>

            </Routes>
           
          </div>
        </div>
    </>
  );
}

export default App;
