import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainPage } from '../pages';
import { lazy } from 'react';
import { MainLayout } from './layouts/MainLayout';

const EducationPage = lazy(() => import('../pages/educationPage/EducationPage'));
const ResearchPage = lazy(() => import('../pages/researchPage/ResearchPage'));
const AboutPage = lazy(() => import('../pages/aboutPage/AboutPage'));

export const appRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Navigate to='/main' replace />,
        },
        {
          path: '/main',
          element: <MainPage />,
        },
        {
          path: '/education',
          element: <EducationPage />,
        },
        {
          path: '/research',
          element: <ResearchPage />,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
      ],
    },
  ]);
