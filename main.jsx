import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import PlayerContextProvider from './PlayerContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
    <PlayerContextProvider>
     <App />
    </PlayerContextProvider>
     </BrowserRouter>
  </React.StrictMode>
);

