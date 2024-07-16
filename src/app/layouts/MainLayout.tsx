import { Outlet } from 'react-router-dom';
import { Header } from '../../widgets/Header';

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
