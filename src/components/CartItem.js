import React from 'react';

const CartItem = ({ item, handleDeleteItem }) => {
  const { id, name, description, image, price, quantity } = item;

  const handleDelete = () => {
    handleDeleteItem(id);
  };

  return (
    <div className="cart-item">
      <img src={image} alt={name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{name}</h3>
        <p className="item-price">Price: ${price}</p>
        <p className="item-quantity">Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
