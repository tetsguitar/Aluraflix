import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Certifique-se de que o componente `App` está corretamente importado
import './index.css'; // Estilos globais

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);