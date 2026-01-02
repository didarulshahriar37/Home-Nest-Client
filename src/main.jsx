import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import './index.css'
import router from './Routes/Routes.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  offset: 100
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)