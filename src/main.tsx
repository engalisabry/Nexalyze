import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import { store } from 'store/store';
import { Sidebar } from '@/components';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      {
        path: "/home",
        element: <App />,
      },
      {
        path: "/dashboard",
        element: <h1>dashboard</h1>,
      },
      {
        path: "/analytics",
        element: <h1>analytics</h1>,
      },
      {
        path: "/releases",
        element: <h1>releases</h1>,
      },
      {
        path: "/releases",
        element: <h1>releases</h1>,
      },
      {
        path: "/account",
        element: <h1>account</h1>,
      },
      {
        path: "/security",
        element: <h1>security</h1>,
      },
      {
        path: "/settings",
        element: <h1>settings</h1>,
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
