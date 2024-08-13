import styles from './PublicationsPanel.module.scss';
import { Outlet } from 'react-router-dom';
import { Text } from '@/shared';

const PublicationsPanel = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper__title']}>
        <Text tag='span' size='xl' weight='bold'>
          {'Публикации'}
        </Text>
      </div>
      <div className={styles['wrapper__content']}>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicationsPanel;
