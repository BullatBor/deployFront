import { AboutDesc, AboutResearch, AboutStudents, AboutTree } from '@/widgets';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <div className={styles['body']}>
      <AboutDesc />
      <AboutResearch />
      <AboutStudents />
      <AboutTree />
    </div>
  );
};
export default AboutPage;
