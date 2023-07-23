import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/global.scss'
import { BrowserRouter } from 'react-router-dom'

import { AuthContextProvider } from './context/AuthContext';
import { AdminAuthContextProvider } from './context/AdminAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AdminAuthContextProvider>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </AdminAuthContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
