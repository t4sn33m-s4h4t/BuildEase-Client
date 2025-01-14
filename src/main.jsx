import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from "./Router/Router"
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './providers/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position='top-center' />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)