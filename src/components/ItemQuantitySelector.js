import React from 'react';

const ItemQuantitySelector = ({ quantity, onQuantityChange }) => {
  return (
    <div>
      <label htmlFor="quantity">Quantity:</label>
      <select id="quantity" value={quantity} onChange={onQuantityChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
};

export default ItemQuantitySelector;
