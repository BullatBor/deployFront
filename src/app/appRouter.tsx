import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainPage } from '@/pages';
import { lazy } from 'react';
import { MainLayout } from './layouts/MainLayout';

const EducationPage = lazy(() => import('@/pages/educationPage/EducationPage'));
const ResearchPage = lazy(() => import('@/pages/researchPage/ResearchPage'));
const AboutPage = lazy(() => import('@/pages/aboutPage/AboutPage'));
const AdminPage = lazy(() => import('@/pages/adminPage/AdminPage'));
const AdminCoursePanel = lazy(() => import('@/widgets/adminCoursePanel/AdminCoursePanel'));
const PublicationsPanel = lazy(() => import('@/widgets/publicationsPanel/PublicationsPanel'));
const CreateCourse = lazy(() => import('@/features/createCourse/CreateCourse'));
const EditCourse = lazy(() => import('@/features/editCourse/EditCourse'));
const CoursesAdmin = lazy(() => import('@/features/coursesAdmin/CourseAdmin'));

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
          ],
        },
      ],
    },
  ]);
