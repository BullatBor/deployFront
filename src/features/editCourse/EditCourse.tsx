import { Text } from '@/shared';
import styles from './EditCourse.module.scss';
import { CourseForm } from '..';

const EditCourse = () => {
  return (
    <div className={styles['wrapper']}>
      <Text tag='span' size='l' weight='semibold'>
        Редактирование курса
      </Text>
      <CourseForm isCreateType={false} />
    </div>
  );
};

export default EditCourse;
