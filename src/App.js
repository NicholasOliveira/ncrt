import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Global } from './styles/global'
import FileUpload from './Components/FileUpload'



function App() {
  return (
    <>
      <ToastContainer />
      <Global />
      <FileUpload />
    </>
  );
}

export default App;
