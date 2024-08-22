import { Text } from '@/shared';
import styles from './EditCourse.module.scss';
import { CourseEditForm } from '..';
import { Chapters } from '../chapters';

const EditCourse = () => {
  // Получить данные курса data, chapters
  const data = {
    title_ru: 'нвоый',
  };
  const chapterData = [
    {
      id: '1',
      title_ru: 'Первый чаптер',
      position: 1,
      courseId: '1',
      isOpen: true,
    },
    {
      id: '2',
      title_ru: 'Второй чаптер',
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
      <CourseEditForm {...data} />
      <Chapters chaptersData={chapterData} />
    </div>
  );
};

export default EditCourse;
