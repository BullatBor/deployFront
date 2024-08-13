import styles from './CreatePublication.module.scss';
import { Text } from '@/shared';
import { PublicationForm } from '@/features';

const CreatePublication = () => {
  return (
    <div className={styles['wrapper']}>
      <Text tag='span' size='l' weight='semibold'>
        {'Создание Публикации'}
      </Text>
      <PublicationForm isCreatedMode />
    </div>
  );
};

export default CreatePublication;
