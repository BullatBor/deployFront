import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon, Text } from '@/shared';
import styles from './CoursesPage.module.scss';
import cn from 'classnames';
import { MOCK_COURSES } from '@/features/coursesAdmin/constants';
import { CourseCard } from '@/features';
import { UserBlock } from '@/widgets';

const CoursesPage = () => {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();
  // const [authCheck] = useAuthCheckMutation();

  const handleLogoClick = useCallback(() => {
    document.title = 'MSDE Group';
    navigate('/main');
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [navigate]);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   localStorage.removeItem('token');
  //   token ? authCheck(token) : navigate('/main', {replace: true});
  // }, [authCheck, navigate]);

  return (
    <div className={styles['courses']}>
      <header className={styles['courses__header']}>
        <div className={styles['courses__leftBlock']} onClick={handleLogoClick}>
          <Icon icon={'logo'} widthAndHeight='35px' />
          <div className={styles['courses__logo']}>
            <Text tag={'span'} weight='semibold'>
              {'Molecular Systems'}
            </Text>
            <Text tag={'span'} weight='semibold'>
              {'Design & Engineering Group'}
            </Text>
          </div>
        </div>
        <div className={cn(styles['courses__search'], styles['courses__hide'])}>
          <input
            placeholder='Search course...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <UserBlock />
      </header>
      <main className={styles['courses__main']}>
        <div className={cn(styles['courses__search'], styles['courses__open'])}>
          <input
            placeholder='Search course...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className={styles['courses__cards']}>
          {MOCK_COURSES.filter((course) =>
            course.title.toLowerCase().includes(value.toLowerCase()),
          ).map((course) => (
            <CourseCard key={course.id} path={`/courses/${course.id}`} {...course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;
