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
  const chapterData = [
    {
      id: '1',
      title_ru: 'Первый чаптер',
      description_ru: 'sdsdfsf',
      position: 1,
      courseId: '1',
      isOpen: true,
    },
    {
      id: '2',
      title_ru: 'Второй чаптер',
      description_ru: 'sdsdfsf',
      position: 2,
      courseId: '1',
      isOpen: true,
    },
  ];
  return (
    <div className={styles['wrapper']}>
      <Text tag='span' size='l' weight='semibold'>
        Редактирование курса
      </Text>
      <CourseEditForm courseId={id} />
      <Chapters courseId={id} chaptersData={chapterData} />
      <ParticipantsForm courseId={id} />
    </div>
  );
};

export default EditCourse;
