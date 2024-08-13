import { NewsForm } from '@/features';
import styles from './EditNew.module.scss';
import { Text } from '@/shared';

const EditNew = () => {
  return (
    <div className={styles['wrapper']}>
      <Text tag='span' size='l' weight='semibold'>
        {'Редактирование новости'}
      </Text>
      <NewsForm />
    </div>
  );
};

export default EditNew;
