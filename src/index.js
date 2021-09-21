//Public -> fora do react; SRC -> Dentro do App
import React from 'react'; // importação da biblioteca do js
import ReactDOM from 'react-dom'; //
import './assets/index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);