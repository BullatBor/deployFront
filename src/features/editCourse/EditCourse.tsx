import { Text } from '@/shared';
import styles from './EditCourse.module.scss';
import { CourseEditForm } from '..';
import { Chapters } from '../chapters';

const EditCourse = () => {
  // Получить данные курса data, chapters
  const data = {
    title_ru: 'нвоый',
  };
  return (
    <div className={styles['wrapper']}>
      <Text tag='span' size='l' weight='semibold'>
        Редактирование курса
      </Text>
      <CourseEditForm {...data} />
      <Chapters />
    </div>
  );
};

export default EditCourse;
