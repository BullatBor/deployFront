import { Button } from '@/shared';
import { useNavigate } from 'react-router-dom';
import { MOCK_COURSES } from './constants';
import { CourseCard } from '../courseCard';
import styles from './CourseAdmin.module.scss';

const CourseAdmin = () => {
  const navigate = useNavigate();
  const handleCreateCourse = () => {
    navigate('/admin/courses/createCourse');
  };
  return (
    <div className={styles['wrapper']}>
      <Button size='m' width='content' onClick={handleCreateCourse}>
        Создать курс
      </Button>
      <div className={styles['wrapper__courses']}>
        {MOCK_COURSES.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseAdmin;
