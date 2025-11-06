import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './Page/Home/Home.jsx';
import Root from './Root/Root.jsx';
import Apps from './Page/Apps/Apps.jsx';
import Installation from './Page/Installation/Installation.jsx';
import AppDetails from './Page/AppDetails/AppDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        loader: () => fetch('Apps.json'),
        Component: Home
      },
      {
        path: 'apps',
        Component: Apps
      },
      {
        path: 'installation',
        Component: Installation
      },

    ]
  },

  {
    path: 'details/:id',
    Component: AppDetails

  }





])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>

  </StrictMode>,
)
