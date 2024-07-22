import { Text } from '@/shared';
import styles from './CreateCourse.module.scss';
import { CourseForm } from '@/features';

const CreateCourse = () => {
  return (
    <div className={styles['wrapper']}>
      <Text tag='span' size='l' weight='semibold'>
        Создание курса
      </Text>
      <CourseForm />
    </div>
  );
};

export default CreateCourse;
