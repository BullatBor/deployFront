import { Text, useDeleteCourseMutation, Icon } from '@/shared';
import styles from './EditCourse.module.scss';
import { CourseEditForm } from '..';
import { Chapters } from '../chapters';
import { useNavigate, useParams } from 'react-router-dom';
import { ParticipantsForm } from '../participantsForm';

const EditCourse = () => {
  // Получить данные курса data, chapters
  const { id } = useParams();
  const [deleteCourse] = useDeleteCourseMutation();
  const navigate = useNavigate();
  if (!id) return null;

  const deleteHandler = async () => {
    if (id) {
      await deleteCourse(id);
      navigate('/admin/courses/all');
    }
  };

  return (
    <div className={styles['wrapper']}>
      <div className={styles['header']}>
        <Text tag='span' size='l' weight='semibold'>
          Редактирование курса
        </Text>
        <Icon
          width='24px'
          height='24px'
          icon='delete'
          className={styles['delete']}
          onClick={deleteHandler}
        />
      </div>
      <CourseEditForm courseId={id} />
      <Chapters courseId={id} />
      <ParticipantsForm courseId={id} />
    </div>
  );
};

export default EditCourse;
