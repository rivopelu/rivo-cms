import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.scss';
import { NextUIProvider } from '@nextui-org/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ENV } from './constants/env.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <GoogleOAuthProvider clientId={ENV.GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
