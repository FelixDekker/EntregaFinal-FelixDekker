import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ cartItemCount }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icono" />
      <span className="cart-notificacion badge bg-danger">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;
