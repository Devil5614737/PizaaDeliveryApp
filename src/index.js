import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const stripePromise=loadStripe('pk_test_51K6viUSEi48qcQQWuSv8KoCEOyLrciURb3tKCLK6OoIYrTrlF5889PEPIAEvkdIveLS5PsRJFN3fBsJLJt7KVHi2001R8puArh')
const options = {
  // passing the client secret obtained from the server
  clientSecret: '{{CLIENT_SECRET}}',
};


ReactDOM.render(
  <BrowserRouter>
  <Elements stripe={stripePromise}>
    <App />
    </Elements>
  </BrowserRouter>
,
  document.getElementById('root')
);

