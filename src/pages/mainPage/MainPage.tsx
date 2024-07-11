import {
  EducationBlock,
  LogoBlock,
  NewsBlock,
  ResearchBlock,
  Students,
  Universitys,
} from '../../features';

export const MainPage = () => {
  return (
    <div>
      <LogoBlock />
      <ResearchBlock />
      <EducationBlock />
      <NewsBlock />
      <Students />
      <Universitys />
    </div>
  );
};
