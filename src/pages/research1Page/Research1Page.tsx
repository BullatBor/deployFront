import {
  Research1Main,
  Advantages,
  Disadvantages,
  OurTask,
  Results,
  OtherStudies,
} from '@/features';
import styles from './Researc.module.scss';
import { OTHER_STUDIES } from './constants';

const Research1Page = () => {
  return (
    <div className={styles['body']}>
      <Research1Main />
      <div className={styles['section_wrapper']}>
        <Advantages />
        <Disadvantages />
        <OurTask />
        <Results />
        <OtherStudies studies={OTHER_STUDIES} />
      </div>
    </div>
  );
};

export default Research1Page;
