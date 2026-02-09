import React, { useState, useContext, useRef } from 'react';  // ✅ added useRef here
import './Navbar.css';
import logo from '../Assets/logo.png';
import profile_icon from '../Assets/profile_icon.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef(); // ✅ now works correctly

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='Zariyah Logo' className='nav-logo-img' />
      <div className='nav-logo'>
        <p>Zariyah</p>
      </div>

      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => setMenu("shop")}>
          <Link
            style={{ textDecoration: 'none', color: menu === "shop" ? 'goldenrod' : '#4a4a4a' }}
            to='/'
          >
            Shop
          </Link>
          {menu === "shop" && <div className="gold-underline"></div>}
        </li>

        <li onClick={() => setMenu("kurtis")}>
          <Link
            style={{ textDecoration: 'none', color: menu === "kurtis" ? 'goldenrod' : '#4a4a4a' }}
            to='/kurtis'
          >
            Kurtis
          </Link>
          {menu === "kurtis" && <div className="gold-underline"></div>}
        </li>

        <li onClick={() => setMenu("about")}>
          <Link
            style={{ textDecoration: 'none', color: menu === "about" ? 'goldenrod' : '#4a4a4a' }}
            to='/about'
          >
            About
          </Link>
          {menu === "about" && <div className="gold-underline"></div>}
        </li>

        <li onClick={() => setMenu("contactus")}>
          <Link
            style={{ textDecoration: 'none', color: menu === "contactus" ? 'goldenrod' : '#4a4a4a' }}
            to='/contactus'
          >
            Contact Us
          </Link>
          {menu === "contactus" && <div className="gold-underline"></div>}
        </li>
      </ul>

      <div className='nav-login-cart'>
        <Link to='/login'><img src={profile_icon} alt='Login' /></Link>
        <Link to='/cart' className='nav-cart'>
          <img src={cart_icon} alt='Cart' />
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </Link>
      </div>
    </div>
  );
};
