import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Items from "./components/Items.jsx"
import Item from "./components/Item"
import UserCart from "./components/UserCart"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />, //need to make an error page component, i guess - interesting idea of a way to render a 404 or other HTTP error event.
  },

  { path: "/items", element: <Items />, },
  { path: "/items/:_id", element: <Item />, },

  // this needs validation for userState/session/cookies - however I decide to handle items in cart
  { path: "/userCart", element: <UserCart />, }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
