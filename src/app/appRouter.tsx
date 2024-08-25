import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainPage } from '@/pages';
import { lazy, Suspense } from 'react';
import { MainLayout } from './layouts/MainLayout';
import ErrorPage from '@/pages/errorPage/ErrorPage';
import { RequireAdmin, RequireAuth } from '@/shared';
import LoadingPage from '@/pages/loadingPage/LoadingPage';

const PublicationsPage = lazy(() => import('../pages/publicationsPage/PublicationsPage'));
const EducationPage = lazy(() => import('@/pages/educationPage/EducationPage'));
const ResearchPage = lazy(() => import('@/pages/researchPage/ResearchPage'));
const AboutPage = lazy(() => import('@/pages/aboutPage/AboutPage'));
const AdminPage = lazy(() => import('@/pages/adminPage/AdminPage'));
const AdminCoursePanel = lazy(() => import('@/widgets/adminCoursePanel/AdminCoursePanel'));
const Research1Page = lazy(() => import('@/pages/research1Page/Research1Page'));
const Research2Page = lazy(() => import('@/pages/research2Page/Research2Page'));
const Research3Page = lazy(() => import('@/pages/research3Page/Research3Page'));
const AuthForm = lazy(() => import('@/pages/authForm/AuthForm'));
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
const CoursesPage = lazy(() => import('@/pages/coursesPage/CoursesPage'));
const CoursePage = lazy(() => import('@/pages/coursePage/CoursePage'));
const DescriptionPage = lazy(() => import('@/pages/descriptionPage/DescriptionPage'));
const ChapterPage = lazy(() => import('@/pages/chapterPage/ChapterPage'));

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
          path: '/registration',
          element: <AuthForm type={'registration'} />,
        },
        {
          path: '/authorization',
          element: <AuthForm type={'authorization'} />,
        },
        {
          path: '/admin',
          element: (
            <RequireAdmin>
              <AdminPage />
            </RequireAdmin>
          ),
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
    {
      path: '/courses',
      element: (
        <RequireAuth>
          <Suspense fallback={<LoadingPage />}>
            <CoursesPage />
          </Suspense>
        </RequireAuth>
      ),
    },
    {
      path: '/courses/:id',
      element: (
        <RequireAuth>
          <Suspense fallback={<LoadingPage />}>
            <CoursePage />
          </Suspense>
        </RequireAuth>
      ),
      children: [
        {
          index: true,
          element: <Navigate to='./description' replace />,
        },
        {
          path: '/courses/:id/description',
          element: <DescriptionPage />,
        },
        { path: '/courses/:id/:chapter', element: <ChapterPage /> },
      ],
    },
  ]);
