import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Shop from '../TopPages/Shop/Shop';
import Contact from '../TopPages/Contact/Contact';
import Layout from '../TopPages/Layout';
import Cart from '../TopPages/Cart/Cart';
import Product from '../Categories/Product';
import Home from '../TopPages/Home/Home';

function TopNav (){
    return (
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element = {<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/Shop" element = {<Shop/>} />
          <Route path="/Contact" element ={<Contact/>} />
          <Route path="/Cart" element = {<Cart/>} />
          <Route path="/shop/:category" element ={<Shop/>} />
          <Route path="/shop/:category/:id" element ={<Product/>} />
          </Route>
        </Routes>
        </BrowserRouter>
        </>
    );
} 
export default TopNav;