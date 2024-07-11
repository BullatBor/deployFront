import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './app/appRouter.tsx';
import './i18';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div>...Loading</div>}>
      <RouterProvider router={appRouter()} />
    </Suspense>
  </React.StrictMode>,
);
