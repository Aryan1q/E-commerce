import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Shop} from './Pages/Shop';
import {ShopCategory} from './Pages/ShopCategory';
import {Product}from './Pages/Product';
import About from './Pages/About';
import {ContactUs} from './Pages/ContactUs';
import {Cart} from './Pages/Cart';
import {LoginSignup} from './Pages/LoginSignup';

import women_banner from './Components/Assets/banner_women.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route 
            path='/kurtis' 
            element={<ShopCategory banner={women_banner} category="women" subcategory="kurtis" />} 
          />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />         
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
