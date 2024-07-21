import { TAllImages } from '../ui';

export interface EducationProps {
  img: TAllImages;
  sectionName: string;
  descriptionTitle: string;
  leftDescription: string;
  rightDescription: string;
  listValues: string;
}

export interface ISidebar_items {
  id: number;
  title: string;
  url: string;
}
