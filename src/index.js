import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// let baseUrl = 'http://pokeapi.co/api/v2';
let baseUrl = 'http://pokeapi.salestock.net/api/v2';

ReactDOM.render(
  <App baseUrl={baseUrl} />,
  document.getElementById('root')
);
