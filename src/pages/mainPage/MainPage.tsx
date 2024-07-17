import {
  LogoBlock,
  NewsBlock,
  ResearchBlock,
  Students,
  Universities,
  CourseBlock,
} from '../../features';
import { EDUCATION_DATA } from './constant';
import styles from './mainPage.module.scss';

export const MainPage = () => {
  return (
    <div className={styles['body']}>
      <LogoBlock />
      <ResearchBlock />
      <CourseBlock
        sectionName={EDUCATION_DATA.sectionName}
        descriptionTitle={EDUCATION_DATA.descriptionTitle}
        img={EDUCATION_DATA.img}
        leftDescription={EDUCATION_DATA.leftDescription}
        rightDescription={EDUCATION_DATA.rightDescription}
        listValues={EDUCATION_DATA.listValues}
      />
      <NewsBlock />
      <Students />
      <Universities />
    </div>
  );
};
