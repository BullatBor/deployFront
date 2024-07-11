import { CourseBlock, EducationResource } from '../../features';
import { EDUCATION_DATA } from './constants';

const EducationPage = () => {
  return (
    <div>
      <EducationResource />
      <CourseBlock
        sectionName={EDUCATION_DATA.sectionName}
        descriptionTitle={EDUCATION_DATA.descriptionTitle}
        img={EDUCATION_DATA.img}
        leftDescription={EDUCATION_DATA.leftDescription}
        rightDescription={EDUCATION_DATA.rightDescription}
        listValues={EDUCATION_DATA.listValues}
      />
    </div>
  );
};

export default EducationPage;
