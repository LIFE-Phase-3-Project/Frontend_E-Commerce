import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { api } from './redux/api/api'
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);


reportWebVitals();
