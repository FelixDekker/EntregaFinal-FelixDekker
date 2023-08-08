import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemQuantitySelector from './ItemQuantitySelector';

const ItemDetail = ({ product, addItemToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    addItemToCart({ ...product, quantity });
  };

  return (
    <div className="item-detail">
      <div className="item-detail-info">
        <h3 className="item-detail-title">{product.name}</h3>
        <p className="item-detail-description">{product.description}</p>
        <div className="item-detail-quantity">
          <label className="item-detail-quantity-label" htmlFor="quantity">
          </label>
          <ItemQuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} />
        </div>
        <button className="item-detail-add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
      <div className="item-detail-image-container">
        <img src={product.image} alt={product.name} className="item-detail-image" />
      </div>
    </div>
  );
};

const ItemDetailContainer = ({ addItemToCart }) => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: 'Mate',
      image: '/images/mate.jpg',
      description: 'Los mejores mates artesanales',
    },
    {
      id: 2,
      name: 'Yerbero',
      image: '/images/yerbero.jpg',
      description: 'Yerberos hechos por la gente de nuestra tierra, para la yerba de nuestra tierra',
    },
    {
      id: 3,
      name: 'Termo',
      image: '/images/termo.jpg',
      description: 'Los termos de mejor calidad al mejor precio',
    },
    {
      id: 4,
      name: 'Bombilla',
      image: '/images/bombilla.jpg',
      description: 'Bombillas hechas a mano para evitar cualquier tipo de bloqueo o filtracion',
    },
    {
      id: 5,
      name: 'Azucarera',
      image: '/images/azucarera.jpg',
      description: 'Porque para amarga esta la vida',
    },
  ];

  const product = products.find((p) => p.id === +id);

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <h2>Detalle del producto</h2>
      <ItemDetail product={product} addItemToCart={addItemToCart} />
    </div>
  );
};

export default ItemDetailContainer;

