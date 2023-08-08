import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { deleteDoc, doc, addDoc, collection, getDocs } from 'firebase/firestore';
import { getFirestore, Timestamp } from 'firebase/firestore';
import CheckoutForm from './CheckoutForm';
import { v4 as uuidv4 } from 'uuid';

const CartPage = ({ cartItems, handleDeleteItem, db, setCartItems }) => {
  const cartItemsInCart = cartItems.filter((item) => item.quantity > 0);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isPurchaseCompleted, setIsPurchaseCompleted] = useState(false);

  const handleDelete = async (itemId) => {
    try {
      await deleteDoc(doc(db, 'cartItems', itemId));
      handleDeleteItem(itemId);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const getTotalAmount = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handlePurchase = async (buyerInfo) => {
    if (!buyerInfo) {
      console.error('Error: Buyer info is undefined.');
      return;
    }
  
    const newOrderID = uuidv4();
  
    const purchaseData = {
      buyerInfo: buyerInfo,
      cartItems: cartItemsInCart,
      totalAmount: getTotalAmount(cartItemsInCart),
      timestamp: Timestamp.fromDate(new Date()),
      orderID: newOrderID,
    };
  
    try {
      const purchaseRef = await addDoc(collection(db, 'purchases'), purchaseData);
      console.log('Purchase added with ID:', purchaseRef.id);
  

      cartItemsInCart.forEach(async (cartItem) => {
        await deleteDoc(doc(db, 'cartItems', cartItem.id));
      });
  
     
      setCartItems([]);
  
      setIsPurchaseCompleted(true);
    } catch (error) {
      console.error('Error adding purchase:', error);
    }
  };

  // useEffect to trigger page reload when purchase is completed
  useEffect(() => {
    if (isPurchaseCompleted) {
      // Reload the page after completing the purchase
      window.location.reload();
    }
  }, [isPurchaseCompleted]);

  return (
    <div>
      {isCheckout ? (
        <CheckoutForm onCompletePurchase={handlePurchase} />
      ) : (
        <div>
          <h2>Cart Items</h2>
          {cartItemsInCart.length > 0 ? (
            cartItemsInCart.map((item) => (
              <CartItem key={item.id} item={item} handleDeleteItem={handleDelete} />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}

          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Amount: ${getTotalAmount(cartItemsInCart).toFixed(2)}</p>
            <button onClick={() => setIsCheckout(true)}>Checkout</button>
          </div>
          {isPurchaseCompleted && (
            <div className="purchase-success">
              <span className="checkmark">
                <span>✔</span>
              </span>
              <p>Your purchase is complete!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
