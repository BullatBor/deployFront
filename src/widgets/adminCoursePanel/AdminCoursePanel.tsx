import { Button } from '@/shared';
import styles from './AdminCoursePanel.module.scss';
import { useNavigate } from 'react-router-dom';

const AdminCoursePanel = () => {
  const navigate = useNavigate();
  const handleCreateCourse = () => {
    navigate('/admin/createCourse');
  };
  return (
    <div className={styles['wrapper']}>
      <div>
        <Button size='s' onClick={handleCreateCourse}>
          Создать курс
        </Button>
      </div>
    </div>
  );
};

export default AdminCoursePanel;
