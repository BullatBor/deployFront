import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages';
import App from '../App';
import { lazy } from 'react';
const EducationPage = lazy(
  () => import('../pages/educationPage/EducationPage'),
);

export const appRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/education',
          element: <EducationPage />,
        },
      ],
    },
  ]);
