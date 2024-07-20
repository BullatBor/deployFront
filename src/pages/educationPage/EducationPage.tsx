import { CourseBlock, EducationResource } from '../../features';
import { EDUCATION_DATA } from './constants';
import styles from './Education.module.scss';

const EducationPage = () => {
  return (
    <div className={styles['body']}>
      <EducationResource />
      <div className={styles['section_wrapper']}>
        <CourseBlock
          sectionName={EDUCATION_DATA.sectionName}
          descriptionTitle={EDUCATION_DATA.descriptionTitle}
          img={EDUCATION_DATA.img}
          leftDescription={EDUCATION_DATA.leftDescription}
          rightDescription={EDUCATION_DATA.rightDescription}
          listValues={EDUCATION_DATA.listValues}
        />
      </div>
    </div>
  );
};

export default EducationPage;
