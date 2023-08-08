import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const products = [
    {
      id: 1,
      name: 'Mates',
      description: 'Los mejores mates artesanales',
      image: './images/mate.jpg',
    },
    {
      id: 2,
      name: 'Yerberos',
      description: 'Para guardar tu yerba con mucha facha',
      image: './images/yerbero.jpg',
    },
    {
      id: 3,
      name: 'Termos',
      description: 'Para que los verdes nunca esten frios, estes donde estes',
      image: '/images/termo.jpg',
    },
    {
      id: 4,
      name: 'Bombillas',
      description: 'Las mejores bombillas artesanales, para que no se te corte la experiencia',
      image: '/images/bombilla.jpg',
    },
    {
      id: 5,
      name: 'Azucareras',
      description: 'Para quienes necesitan un poco mas de dulzura',
      image: '/images/azucarera.jpg',
    },
  ];

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

