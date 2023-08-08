import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


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
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
