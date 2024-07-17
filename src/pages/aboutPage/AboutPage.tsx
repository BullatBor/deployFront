import { AboutDesc } from '@/widgets';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <div className={styles['body']}>
      <AboutDesc />
    </div>
  );
};
export default AboutPage;
