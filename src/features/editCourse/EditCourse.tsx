import { Text } from '@/shared';
import styles from './EditCourse.module.scss';
import { CourseEditForm } from '..';
import { Chapters } from '../chapters';
import { useParams } from 'react-router-dom';
import { ParticipantsForm } from '../participantsForm';

const EditCourse = () => {
  // Получить данные курса data, chapters
  const { id } = useParams();
  if (!id) return null;

  return (
    <div className={styles['wrapper']}>
      <Text tag='span' size='l' weight='semibold'>
        Редактирование курса
      </Text>
      <CourseEditForm courseId={id} />
      <Chapters courseId={id} />
      <ParticipantsForm courseId={id} />
    </div>
  );
};

export default EditCourse;
