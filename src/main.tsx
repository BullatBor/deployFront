import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appRouter } from './app/appRouter.tsx';
import { store } from './app/appStore.ts';
import './main.scss';
import './i18';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter()} />
    </Provider>
  </React.StrictMode>,
);
