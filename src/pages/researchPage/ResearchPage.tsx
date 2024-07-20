import { ResearchAreas } from '@/features';
import styles from './ResearchPage.module.scss';

const ResearchPage = () => {
  return (
    <div className={styles['body']}>
      <div className={styles['section_wrapper']}>
        <ResearchAreas />
      </div>
    </div>
  );
};

export default ResearchPage;
