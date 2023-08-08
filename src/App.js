import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import SobreNosotros from './components/SobreNosotros';
import Contactenos from './components/Contactenos';
import Footer from './components/Footer';
import CartPage from './components/CartPage';
import CheckoutForm from './components/CheckoutForm';
import './styles.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVJWLRid_e4Cp_nfa6Afpj-l77f7FOLIw",
  authDomain: "mates-cancheros.firebaseapp.com",
  projectId: "mates-cancheros",
  storageBucket: "mates-cancheros.appspot.com",
  messagingSenderId: "564578345770",
  appId: "1:564578345770:web:ba60b8b582453f4b32b453",
  measurementId: "G-673M1QNFRH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = async (item) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem, index) =>
          index === itemIndex ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
        )
      );
    } else {
      const newItem = { ...item, quantity: item.quantity };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);

      try {
        await addDoc(collection(db, 'cartItems'), newItem);
      } catch (error) {
        console.error('Error adding item to cart:', error);
      }
    }
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cartItems'));
        const fetchedCartItems = {};
  
        querySnapshot.forEach((doc) => {
          const { id, name, description, image, price, quantity } = doc.data();
  
          if (!fetchedCartItems[id]) {
            fetchedCartItems[id] = { id, name, description, image, price, quantity };
          } else {
            fetchedCartItems[id].quantity += quantity;
          }
        });
  
        setCartItems(Object.values(fetchedCartItems));
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    setCartItems([]);
  
    fetchCartItems();
  }, []);
  
    

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteDoc(doc(db, 'cartItems', itemId));
      setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  

  return (
    <BrowserRouter>
      <div className="container">
        <NavBar cartItems={cartItems} />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route
              path="/item/:id"
              element={<ItemDetailContainer addItemToCart={addItemToCart} />}
            />
            <Route path="/SobreNosotros" element={<SobreNosotros />} />
            <Route path="/Contactenos" element={<Contactenos />} />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  handleDeleteItem={handleDeleteItem}
                  db={db}
                  setCartItems={setCartItems}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
