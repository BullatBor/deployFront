import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainPage } from '@/pages';
import { lazy } from 'react';
import { MainLayout } from './layouts/MainLayout';
import { l } from 'node_modules/vite/dist/node/types.d-aGj9QkWt';

const PublicationsPage = lazy(() => import('../pages/publicationsPage/PublicationsPage'));
const EducationPage = lazy(() => import('@/pages/educationPage/EducationPage'));
const ResearchPage = lazy(() => import('@/pages/researchPage/ResearchPage'));
const AboutPage = lazy(() => import('@/pages/aboutPage/AboutPage'));
const AdminPage = lazy(() => import('@/pages/adminPage/AdminPage'));
const AdminCoursePanel = lazy(() => import('@/widgets/adminCoursePanel/AdminCoursePanel'));
const AnaliticsPanel = lazy(() => import('@/widgets/analiticsPanel/AnaliticsPanel'));
const CreateCourse = lazy(() => import('@/widgets/createCourse/CreateCourse'));


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
        {
          path: '/admin',
          element: <AdminPage />,
          children: [
            {
              index: true,
              element: <Navigate to='/admin/courses' replace />,
            },
            {
              path: '/admin/courses',
              element: <AdminCoursePanel />,
            },
            {
              path: '/admin/analitics',
              element: <AnaliticsPanel />,
            },
            {
              path: '/admin/createCourse',
              element: <CreateCourse />,
            },
          ],
        },
      ],
    },
  ]);
