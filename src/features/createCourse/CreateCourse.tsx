import { Text } from '@/shared';
import styles from './CreateCourse.module.scss';
import { CourseCreateForm } from '@/features';

const CreateCourse = () => {
  return (
    <div className={styles['wrapper']}>
      <Text tag='span' size='l' weight='semibold'>
        Создание курса
      </Text>
      <CourseCreateForm />
    </div>
  );
};

export default CreateCourse;
