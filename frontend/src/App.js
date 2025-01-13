import React from "react";
import Nav from "./components/navbar/nav";
import Shopcategory from './Pages/shopcategory'
import Cart from './Pages/cart'
import Products from './Pages/products'
import Login from './Pages/loginsignup'
import Shop from './Pages/shop'
import Footer from '../src/components/footer/Footer'
import men_banner from './components/Assets/banner_mens.png'
import kids_banner from './components/Assets/banner_kids.png'
import women_banner from './components/Assets/banner_women.png'
import Breadcrum from "./components/breadcrum/Breadcrum";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        {<Route path="/" element={<Shop/>}></Route> }{/* Home page start view */}
        <Route path="/mens" element={<Shopcategory banner={men_banner} category="men"/>}></Route>
        <Route path="/womens" element={<Shopcategory banner={women_banner}category="women"/>}></Route>
        <Route path="/kids" element={<Shopcategory banner={kids_banner} category="kid"/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/breadcrum" element={<Breadcrum/>}></Route>
        <Route path=":productId" element={<Products/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
