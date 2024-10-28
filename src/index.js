// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/index.css'; // You can add global styles here

// Importing Toastify CSS for notifications
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
