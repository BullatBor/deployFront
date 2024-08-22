import { useAuth } from '@/shared';
import { ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

export const RequireAdmin = (props: { children: ReactNode }) => {
  const { children } = props;
  const location = useLocation();
  const userInfo = useAuth();

  return children;
  return userInfo.role === 'ADMIN' ? (
    children
  ) : (
    <Navigate to='/authorization' state={{ from: location.pathname }} />
  );
};
