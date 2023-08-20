import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider
  domain="dev-pplj15cvhbibeux5.us.auth0.com"
  clientId="zeaNTNy8f2GMN0YyZODY3vMnObXnKADe"
  authorizationParams={{
    redirect_uri: window.location.origin
}}
>

    <Provider store={store}>
    <App />
    </Provider>
    </Auth0Provider>
  
);