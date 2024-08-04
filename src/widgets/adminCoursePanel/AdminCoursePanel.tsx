import { Text } from '@/shared';
import styles from './AdminCoursePanel.module.scss';
import { Outlet } from 'react-router-dom';

const AdminCoursePanel = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper__title']}>
        <Text tag='span' size='xl' weight='bold'>
          Курсы
        </Text>
      </div>
      <div className={styles['wrapper__content']}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminCoursePanel;
