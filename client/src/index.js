import React from 'react';
import ReactDom from 'react-dom'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './providers/AuthProvider'
import 'semantic-ui-css/semantic.min.css'
import { initMiddleware} from 'devise-axios';

initMiddleware();

ReactDom.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</AuthProvider>,

document.getElementById('root'))