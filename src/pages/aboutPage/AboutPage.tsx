import { AboutDesc, AboutResearch } from '@/widgets';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <div className={styles['body']}>
      <AboutDesc />
      <AboutResearch />
    </div>
  );
};
export default AboutPage;
