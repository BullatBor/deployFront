import { Button, useGetCoursesQuery } from '@/shared';
import { useNavigate } from 'react-router-dom';
import { CourseCard } from '../courseCard';
import styles from './CourseAdmin.module.scss';

const CourseAdmin = () => {
  const navigate = useNavigate();
  const handleCreateCourse = () => {
    navigate('/admin/courses/createCourse');
  };
  const { data } = useGetCoursesQuery();

  return (
    <div className={styles['wrapper']}>
      <Button size='m' width='content' onClick={handleCreateCourse}>
        Создать курс
      </Button>
      <div className={styles['wrapper__courses']}>
        {data && data.map((course) => <CourseCard key={course.id} {...course} path={`/admin/courses/editCourse/${course.id}`}/>)}
      </div>
    </div>
  );
};

export default CourseAdmin;
