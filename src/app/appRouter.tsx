import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainPage } from '@/pages';
import { lazy } from 'react';
import { MainLayout } from './layouts/MainLayout';
import ErrorPage from '@/pages/errorPage/ErrorPage';

const PublicationsPage = lazy(() => import('../pages/publicationsPage/PublicationsPage'));
const EducationPage = lazy(() => import('@/pages/educationPage/EducationPage'));
const ResearchPage = lazy(() => import('@/pages/researchPage/ResearchPage'));
const AboutPage = lazy(() => import('@/pages/aboutPage/AboutPage'));
const AdminPage = lazy(() => import('@/pages/adminPage/AdminPage'));
const AdminCoursePanel = lazy(() => import('@/widgets/adminCoursePanel/AdminCoursePanel'));
const Research1Page = lazy(() => import('@/pages/research1Page/Research1Page'));
const Research2Page = lazy(() => import('@/pages/research2Page/Research2Page'));
const Research3Page = lazy(() => import('@/pages/research3Page/Research3Page'));
const PublicationsPanel = lazy(() => import('@/widgets/publicationsPanel/PublicationsPanel'));
const PublicationsAdmin = lazy(() => import('@/features/publicationsAdmin/PublicationsAdmin'));
const CreatePublication = lazy(() => import('@/features/createPublication/CreatePublication'));
const EditPublication = lazy(() => import('@/features/editPublication/EditPublication'));
const CreateCourse = lazy(() => import('@/features/createCourse/CreateCourse'));
const EditCourse = lazy(() => import('@/features/editCourse/EditCourse'));
const CoursesAdmin = lazy(() => import('@/features/coursesAdmin/CourseAdmin'));
const NewsPanel = lazy(() => import('@/widgets/newsPanel/NewsPanel'));
const NewsAdmin = lazy(() => import('@/features/newsAdmin/NewsAdmin'));
const CreateNew = lazy(() => import('@/features/createNew/CreateNew'));
const EditNew = lazy(() => import('@/features/editNew/EditNew'));

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
          element: <Research2Page />,
        },
        {
          path: '/research3',
          element: <Research3Page />,
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
              children: [
                {
                  index: true,
                  element: <Navigate to='/admin/publications/all' replace />,
                },
                {
                  path: '/admin/publications/all',
                  element: <PublicationsAdmin />,
                },
                {
                  path: '/admin/publications/createPublication',
                  element: <CreatePublication />,
                },
                {
                  path: '/admin/publications/editPublication/:id',
                  element: <EditPublication />,
                },
              ],
            },
            {
              path: '/admin/news',
              element: <NewsPanel />,
              children: [
                {
                  index: true,
                  element: <Navigate to='/admin/news/all' replace />,
                },
                {
                  path: '/admin/news/all',
                  element: <NewsAdmin />,
                },
                {
                  path: '/admin/news/createNew',
                  element: <CreateNew />,
                },
                {
                  path: '/admin/news/editNew/:id',
                  element: <EditNew />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
