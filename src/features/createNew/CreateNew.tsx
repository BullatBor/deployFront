import styles from './CreateNew.module.scss';
import { Text } from '@/shared';
import { NewsForm } from '@/features';

const CreateNew = () => {
  return (
    <div className={styles['wrapper']}>
      <Text tag='span' size='l' weight='semibold'>
        {'Создание новости'}
      </Text>
      <NewsForm isCreatedMode />
    </div>
  );
};

export default CreateNew;
