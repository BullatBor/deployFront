import { ResearchAreas } from '@/features';
import styles from './ResearchPage.module.scss';

const ResearchPage = () => {
  return (
    <div className={styles['body']}>
      <ResearchAreas />
    </div>
  );
};

export default ResearchPage;
