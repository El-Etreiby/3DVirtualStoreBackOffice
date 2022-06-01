import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from 'react';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';


export default function Navbar(click) {


    const [sidebar,setSidebar] = useState(false);

    const showSidebar = ()=>{
        setSidebar(!sidebar);
    }

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

  return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
    <div className='navbar'>
    {/* logo */}
    <Link to='#' className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar} />
    </Link>
  <div className='navbar__logo'>
      <h2>MERN Shopping Cart</h2>
  </div>
   {/* links  */}
   <ul className='navbar__links'>
   <li>
          <Link to="/virtualstore" className='cart__link'>
              <i className="fas fa-shopping-cart"></i>
              <span>
              Virtual Store
             </span>
          </Link>
      </li>
      <li>
          <Link to="/cart" className='cart__link'>
              <i className="fas fa-shopping-cart"></i>
              <span>
              cart
              <span className = "cartlogo__badge">{getCartCount()}</span>
              </span>
          </Link>
      </li>
      <li>
          <Link to="/">shop</Link>
      </li>
      </ul>
    <div className='hamburger__menu' onClick={click}>
        <div></div>
        <div></div>
        <div></div>
    </div>

</div>
    <nav className={sidebar ? 'nav-menu active':'nav-menu'} >
    <ul className='nav-menu-items'>
        <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
            <AiIcons.AiOutlineClose  onClick={showSidebar}/>
            </Link>
        </li>
        {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
    </ul>
</nav>
</IconContext.Provider>
</>
  )
}
