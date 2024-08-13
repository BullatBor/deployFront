import styles from './NewsPanel.module.scss';
import { Outlet } from 'react-router-dom';
import { Text } from '@/shared';

const NewsPanel = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper__title']}>
        <Text tag='span' size='xl' weight='bold'>
          {'Новости'}
        </Text>
      </div>
      <div className={styles['wrapper__content']}>
        <Outlet />
      </div>
    </div>
  );
};

export default NewsPanel;
