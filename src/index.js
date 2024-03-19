import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
     <App />
 </BrowserRouter>
  
 
);

export const server = `https://api.coingecko.com/api/v3/exchanges`;


