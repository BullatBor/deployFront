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
  title_ru: string;
  description_ru: string;
  title_en?: string;
  description_en: string;
  imageUrl: TAllImages;
  category?: string;
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

export interface IСourseDto {
  id: number;
  title_ru: string;
  description_ru: string;
  title_en?: string;
  description_en?: string;
  isOpen: boolean;
  imageUrl?: string;
}

export interface ICourseGet {
  courseId: string;
  userId: string;
}

export interface IParticipant {
  courseId: string;
  userId: string;
  email: string;
  id?: string;
}

export interface IUsers {
  id: string;
  email: string;
}

export type INewsCreate = Prettify<Omit<INewsDto, 'createdAt' | 'updatedAt' | 'id'>>;

export type INewsUpdate = Prettify<Omit<INewsDto, 'createdAt' | 'updatedAt'>>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};

export interface IChapterData {
  id: string | null;
  type: 'text' | 'img';
  question_ru: string;
  question_en?: string;
  answers: { answer_ru: string; isCorrect: boolean; answer_en?: string; img?: File }[];
}

export interface IChapterAttachment {
  id: string | null;
  name: string;
  url: string;
}

export interface IChapterFormValues {
  id: string | null;
  courseId: string;
  position: number;
  isOpen: boolean;
  title_ru: string;
  description_ru: string;
  title_en: string;
  description_en: string;
  type: 1 | 2;
  chapterData?: IChapterData[];
  attachments?: IChapterAttachment[];
  files?: File;
}

interface IChapters {
  id: string | null;
  position: number;
}

export interface IChapterUpdate {
  courseId: string;
  chapters: IChapters[];
}

export interface IChapterFormProps extends IChapterFormValues {
  index: number;
  isBlocked: boolean;
  isEditPosition: boolean;
  isEditMode?: boolean;
  moveUp: (index: number) => void;
  moveDown: (index: number) => void;
  setBlocked: (isBlocked: boolean) => void;
}
