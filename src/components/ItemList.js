import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <Link to={`/item/${product.id}`} className="item-list-button">
            <img src={product.image} alt={product.name} className="item-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

