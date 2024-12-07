import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Product from './sections/products/Products.jsx'
import './index.css'
import Layout from './Layout.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartContextProvider from './store/shop-cart-context.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products",
        element: <Product/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router}/>
    </CartContextProvider>
  </React.StrictMode>,
)
