import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-t7537pzui2fnbntw.us.auth0.com"
      clientId="2cDx8Kyf8RpP3hI2zgxegX4pzdRDArUn"
      authorizationParams={{
        redirect_uri: 'http://localhost:5173/tasks' ,
      }}
    >
      <ChakraProvider>
        <App/>
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>
);
