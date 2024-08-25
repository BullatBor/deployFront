import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { UserBlock } from '@/widgets';
import { MOCK_COURSES } from '@/features/coursesAdmin/constants';
import { Icon, ICourseCard, Text } from '@/shared';
import { MOCKED_VALUES } from './constants';
import styles from './CoursePage.module.scss';
import { useCallback, useState } from 'react';
import classNames from 'classnames';

const CoursePage = () => {
  const navigate = useNavigate();
  const id = useParams().id as unknown as Pick<ICourseCard, 'id'>;
  const course = MOCK_COURSES.find((course) => course.id === +id);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleLinkClick = useCallback(() => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setOpen(false);
  }, []);

  return (
    <div className={styles['course']}>
      <aside className={styles['course__aside']}>
        <div className={styles['course__heading']}>
          <Text tag='p' weight='bold' size='s'>
            {course?.title_ru}
          </Text>
          <progress max={100} value={20} />
          <Text tag='span' weight='semibold' size='xs'>
            {'20% Complete'}
          </Text>
        </div>
        <ul className={styles['course__list']}>
          {MOCKED_VALUES.map((chapter) => (
            <li
              key={chapter.order}
              className={styles['course__row']}
              onClick={() => navigate(`/courses/${id}/${chapter.order}`)}
            >
              <Icon icon='course' widthAndHeight='14px' />
              <Text tag={'span'} size='xs' weight='medium'>
                {chapter.title}
              </Text>
            </li>
          ))}
        </ul>
      </aside>
      <main className={styles['course__main']}>
        <header className={styles['course__header']}>
          <div onClick={() => setOpen((prev) => !prev)} className={styles['course__visible']}>
            <Icon icon={isOpen ? 'cross' : 'menu'} />
          </div>
          <div className={styles['course__back']}>
            <div onClick={() => navigate('/courses')}>
              <Icon icon={'logout'} widthAndHeight='15px' />
              <div>
                <Text tag='span' weight='medium' size='xs'>
                  {'Back to courses'}
                </Text>
              </div>
            </div>
            <UserBlock />
          </div>
        </header>
        <div className={styles['course__outlet']}>
          <Outlet />
        </div>
      </main>
      <nav className={classNames(styles['boxLinks'], { [styles['boxLinks__active']]: isOpen })}>
        <ul className={styles['boxLinks__list']}>
          {MOCKED_VALUES.map((chapter) => (
            <NavLink
              to={`./${chapter.order}`}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                classNames(styles['boxLinks__link'], {
                  [styles['boxLinks__link_active']]: isActive,
                })
              }
            >
              {chapter.title}
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CoursePage;
