import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainPage } from '@/pages';
import { lazy } from 'react';
import { MainLayout } from './layouts/MainLayout';

const ErrorPage = lazy(() => import('../pages/errorPage/ErrorPage'));
const PublicationsPage = lazy(() => import('../pages/publicationsPage/PublicationsPage'));
const EducationPage = lazy(() => import('@/pages/educationPage/EducationPage'));
const ResearchPage = lazy(() => import('@/pages/researchPage/ResearchPage'));
const Research2 = lazy(() => import('@/pages/research2/Research2'));
const Research3 = lazy(() => import('@/pages/research3/Research3'));
const AboutPage = lazy(() => import('@/pages/aboutPage/AboutPage'));
const AdminPage = lazy(() => import('@/pages/adminPage/AdminPage'));
const AdminCoursePanel = lazy(() => import('@/widgets/adminCoursePanel/AdminCoursePanel'));
const AnaliticsPanel = lazy(() => import('@/widgets/analiticsPanel/AnaliticsPanel'));
const CreateCourse = lazy(() => import('@/widgets/createCourse/CreateCourse'));
const Research1Page = lazy(() => import('@/pages/research1Page/Research1Page'));

export const appRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
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
          path: '/research1',
          element: <Research1Page />,
        },
        {
          path: '/research2',
          element: <Research2 />,
        },
        {
          path: '/research3',
          element: <Research3 />,
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
