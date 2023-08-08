import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ onCompletePurchase }) => {
  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    email: '',
    address: '',
  });

  const [isPurchaseCompleted, setIsPurchaseCompleted] = useState(false);
  const [purchaseId, setPurchaseId] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBuyerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePurchase = () => {
    setIsPurchaseCompleted(true);
    setPurchaseId(generateRandomId());

    onCompletePurchase(buyerInfo);

    setTimeout(() => {
      setIsPurchaseCompleted(false);
      setPurchaseId('');
      setBuyerInfo({
        name: '',
        email: '',
        address: '',
      });
    }, 3000);
  };

  const generateRandomId = () => {
    return Math.floor(Math.random() * 1000000).toString();
  };

  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={buyerInfo.name} onChange={handleInputChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={buyerInfo.email} onChange={handleInputChange} />

        <label htmlFor="address">Address:</label>
        <textarea name="address" value={buyerInfo.address} onChange={handleInputChange} />

        <button type="button" onClick={handlePurchase}>
          Complete Purchase
        </button>

        {isPurchaseCompleted && (
          <div className="purchase-success">
            <span className="checkmark">
              <span>✔</span>
            </span>
            <p>Your purchase is complete! ID: {purchaseId}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
