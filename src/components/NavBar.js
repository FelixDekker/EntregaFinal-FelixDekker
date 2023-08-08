import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaCoffee } from 'react-icons/fa';
import CartWidget from './CartWidget';

const NavBar = ({ cartItems }) => {
  const cartItemCount = cartItems.reduce((total, item) => total + Math.floor(item.quantity), 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bolder', fontSize:'30px', }}>
          Mates Cancheros
        </Link>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/SobreNosotros" className="nav-link">
              Sobre Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contactenos" className="nav-link">
              Contactenos
            </Link>
          </li>
          <li className="nav-item cart-item">
            <Link to="/cart" className="nav-link">
              <CartWidget cartItemCount={cartItemCount} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;


