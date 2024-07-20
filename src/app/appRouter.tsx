import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainPage } from '../pages';
import { lazy } from 'react';
import { MainLayout } from './layouts/MainLayout';

const ResearchPage = lazy(() => import('../pages/researchPage/ResearchPage'));
const PublicationsPage = lazy(() => import('../pages/publicationsPage/PublicationsPage'));
const EducationPage = lazy(() => import('../pages/educationPage/EducationPage'));
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
          path: '/research',
          element: <ResearchPage />,
        },
        {
          path: '/publications',
          element: <PublicationsPage />,
        },
        {
          path: '/education',
          element: <EducationPage />,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
      ],
    },
  ]);
