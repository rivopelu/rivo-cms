import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.scss';
import { NextUIProvider } from '@nextui-org/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ENV } from './constants/env.ts';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeRedux from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider navigate={useNavigate}>
      <GoogleOAuthProvider clientId={ENV.GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Provider store={storeRedux}>
            <App />
          </Provider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
