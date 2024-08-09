import { store } from '@/app/appStore';
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

export interface IOtherStudies {
  img: TAllImages;
  description: string;
  link: string;
}

export interface ICourseCard {
  id: number;
  title: string;
  img: TAllImages;
  researchArea?: string;
}

export interface IPublicationDto {
  id: number;
  name: string;
  authors: string;
  addition: string;
  link?: string;
  createdAt: string;
  updatedAt: string;
  year_id: number;
  publicationId: number;
}

export interface IPublicationsDto {
  id: number;
  year: number;
  createdAt: string;
  updatedAt: string;
  publications: IPublicationDto[];
}

export interface INewsDto {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};
