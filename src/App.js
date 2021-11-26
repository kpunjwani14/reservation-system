import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
