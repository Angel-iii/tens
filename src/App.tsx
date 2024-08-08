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


function App() {
  

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="*" element={<NotFounder/>}/>

            </Routes>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
