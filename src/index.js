import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyChJTpImTVa5iVEDPdly52PsvfIB2QeNY0",
  authDomain: "tomasfratini-ecommerce.firebaseapp.com",
  projectId: "tomasfratini-ecommerce",
  storageBucket: "tomasfratini-ecommerce.appspot.com",
  messagingSenderId: "996580656596",
  appId: "1:996580656596:web:d49f39cfdc47d3a9b34241",
  measurementId: "G-HQSQWKN762"
}; 

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
