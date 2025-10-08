import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from "./Routes/Routes.tsx"
import './App.css'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "XSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-XSRF-TOKEN";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={Router} />    
  </StrictMode>
)
