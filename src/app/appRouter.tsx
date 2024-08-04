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
const Research1Page = lazy(() => import('@/pages/research1Page/Research1Page'));
const PublicationsPanel = lazy(() => import('@/widgets/publicationsPanel/PublicationsPanel'));
const CreateCourse = lazy(() => import('@/features/createCourse/CreateCourse'));
const EditCourse = lazy(() => import('@/features/editCourse/EditCourse'));
const CoursesAdmin = lazy(() => import('@/features/coursesAdmin/CourseAdmin'));

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
              children: [
                {
                  index: true,
                  element: <Navigate to='/admin/courses/all' replace />,
                },
                {
                  path: '/admin/courses/all',
                  element: <CoursesAdmin />,
                  index: true,
                },
                {
                  path: '/admin/courses/createCourse',
                  element: <CreateCourse />,
                },
                {
                  path: '/admin/courses/editCourse/:id',
                  element: <EditCourse />,
                },
              ],
            },
            {
              path: '/admin/publications',
              element: <PublicationsPanel />,
            },
            {
              path: '/admin/news',
              element: <PublicationsPanel />,
            },
          ],
        },
      ],
    },
  ]);
