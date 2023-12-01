import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from "./Basics/Form/Form";
import FormRef from "./Basics/formRef/FormRef";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <FormRef/>
  </React.StrictMode>
);


reportWebVitals();
