import { useNavigate, useParams } from 'react-router-dom';
import { UserBlock } from '@/widgets';
import { MOCK_COURSES } from '@/features/coursesAdmin/constants';
import { Icon, Text } from '@/shared';
import { MOCKED_VALUES } from './constants';
import styles from './CoursePage.module.scss';

const CoursePage = () => {
  const navigate = useNavigate();
  const id = useParams().id as string;
  const course = MOCK_COURSES.find((course) => course.id === +id);

  return (
    <div className={styles['course']}>
      <aside className={styles['course__aside']}>
        <div className={styles['course__heading']}>
          <Text tag='p' weight='bold' size='s'>
            {course?.title}
          </Text>
          <progress max={100} value={20} />
          <Text tag='span' weight='semibold' size='xs'>
            {'20% Complete'}
          </Text>
        </div>
        <ul className={styles['course__list']}>
          {MOCKED_VALUES.map((chapter) => (
            <li className={styles['course__row']}>
              <Text tag={'span'} size='xs' weight='medium'>
                {chapter.title}
              </Text>
            </li>
          ))}
        </ul>
      </aside>
      <main className={styles['course__main']}>
        <header className={styles['course__header']}>
          <div>
            <Icon icon={'logout'} widthAndHeight='15px' />
            <div onClick={() => navigate('/courses')}>
              <Text tag='span' weight='medium' size='xs'>
                {'Back to courses'}
              </Text>
            </div>
          </div>
          <UserBlock />
        </header>
      </main>
    </div>
  );
};

export default CoursePage;
