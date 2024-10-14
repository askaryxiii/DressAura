import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'
import AuthProvider from './context/Auth/AuthProvidor'
import ProductsProvider from './context/Products/ProductsProvidor'
import CartProvider from './context/cart/CartProvider.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  </BrowserRouter>
)
