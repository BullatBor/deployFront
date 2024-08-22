import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../model';

export const useAuth = () => {
  const userInfo = useSelector((state: RootState) => state.auth);

  return useMemo(() => userInfo, [userInfo]);
};
