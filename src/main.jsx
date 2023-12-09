import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './assets/Components/Routes/Routes.jsx'
import AuthProviders from './assets/Components/AuthProviders/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={routes}/>
    </AuthProviders>
  </React.StrictMode>,
)
