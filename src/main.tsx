import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './app/appRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={appRouter()} />
  </React.StrictMode>,
);
