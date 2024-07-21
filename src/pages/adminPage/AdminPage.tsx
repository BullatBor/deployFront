import { Outlet } from 'react-router-dom';
import styles from './AdminPage.module.scss';
import { CourseSidebar } from '@/features';
import { SIDEBAR_ITEMS } from './constant';

const AdminPage = () => {
  return (
    <div className={styles['wrapper']}>
      <CourseSidebar items={SIDEBAR_ITEMS} />
      <Outlet />
    </div>
  );
};

export default AdminPage;
