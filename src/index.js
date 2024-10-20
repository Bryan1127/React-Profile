import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Default styles
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './App.css'; // Add this line to import the CSS


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
