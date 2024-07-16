import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainPage } from '../pages';
import { lazy, Suspense } from 'react';
import { MainLayout } from './layouts/MainLayout';
const EducationPage = lazy(() => import('../pages/educationPage/EducationPage'));
const ResearchPage = lazy(() => import('../pages/researchPage/ResearchPage'));

export const appRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<div>...Loading</div>}>
          <MainLayout />
        </Suspense>
      ),
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
      ],
    },
  ]);
