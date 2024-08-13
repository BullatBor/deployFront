import { PublicationForm } from '../publicationForm';
import styles from './EditPublication.module.scss';
import { Text } from '@/shared';

const EditPublication = () => {
  return (
    <div className={styles['wrapper']}>
      <Text tag='span' size='l' weight='semibold'>
        {'Редактирование публикации'}
      </Text>
      <PublicationForm />
    </div>
  );
};

export default EditPublication;
