import '@blocknote/core/style.css';
import '@blocknote/react/style.css';
import '@blocknote/core/fonts/inter.css';
import { NextUIProvider } from '@nextui-org/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx';
import { ENV } from './constants/env.ts';
import storeRedux from './redux/store.ts';
import './styles/index.scss';

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
