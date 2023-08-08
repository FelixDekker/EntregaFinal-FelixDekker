import React from 'react';

const AddItemButton = ({ onAddToCart }) => {
  return (
    <div>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default AddItemButton;
