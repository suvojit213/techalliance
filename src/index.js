import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css'; // Assuming you will create an index.css for Tailwind CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);