import { store } from '@/app/appStore';
import { TAllImages } from '../ui';
import { Key } from 'react';

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
  id?: Key | null;
  title: string;
  img: TAllImages;
  researchArea?: string;
  path: string;
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

export type IPublicationCreate = Prettify<
  Omit<IPublicationDto, 'id' | 'createdAt' | 'updatedAt' | 'year_id' | 'publicationId'> & {
    year: number;
  }
>;

export type IPublicationUpdate = Prettify<
  Omit<IPublicationDto, 'createdAt' | 'updatedAt' | 'year_id' | 'publicationId'>
>;

export interface INewsDto {
  id: number;
  title_ru: string;
  title_en: string;
  date: string;
  description_ru: string;
  description_en: string;
  createdAt: string;
  updatedAt: string;
}

export type INewsCreate = Prettify<Omit<INewsDto, 'createdAt' | 'updatedAt' | 'id'>>;

export type INewsUpdate = Prettify<Omit<INewsDto, 'createdAt' | 'updatedAt'>>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};
