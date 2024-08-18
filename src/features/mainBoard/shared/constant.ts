import { TAllImages } from '../../../shared';

interface NEWS_PROPS {
  id: number;
  title_ru: string;
  title_en: string;
  date: string;
  description_ru: string;
  description_en: string;
}

interface CARD_TYPES {
  img: TAllImages;
  description: string;
  link: string;
}

export const NEWS_DATA: NEWS_PROPS[] = [
  {
    id: 1,
    title_ru:
      'На платформе Открытое образование вышел наш онлайн-курс по моделированию химических реакций',
    title_en:
      'Our online course on modeling chemical reactions has been released on the Open Education platform',
    date: 'September 1, 2023',
    description_ru:
      'Курс носит яркую практическую направленность и основан на проведении расчетов с использованием широко используемых квантово-химических программных пакетов ORCA и Molcas. В рамках данного 10-недельного курса обучающиеся научатся использовать методы квантовой химии и проводить расчеты свойств химических веществ и моделирование химических реакций, в том числе с использованием суперкомпьютеров. Курс носит яркую практическую направленность и основан на проведении расчетов с использованием широко используемых квантово-химических программных пакетов ORCA и Molcas',
    description_en:
      'The course has a strong practical focus and is based on calculations using widely used quantum chemical software packages ORCA and Molcas. As part of this 10-week course, students will learn to use quantum chemistry methods and calculate the properties of chemical substances and simulate chemical reactions, including using supercomputers. The course has a strong practical focus and is based on calculations using widely used quantum chemical software packages ORCA and Molcas',
  },
  {
    id: 2,
    title_ru: 'Вышла статья в сборнике Американского Биофизического Общества',
    title_en: ' An article was published in the collection of the American Biophysical Society',
    date: 'February 10, 2023',
    description_ru:
      'Вышла статья в сборнике конференции Американского Биофизического Общества, в соавторстве с Николаевым Дмитрием и Михаилом Рязанцевым',
    description_en:
      'An article was published in the collection of the conference of the American Biophysical Society, co-authored with Dmitry Nikolaev and Mikhail Ryazantsev',
  },
];

export const UNIVERSITY_DATA: Omit<CARD_TYPES, 'link'>[] = [
  {
    img: 'SP-University',
    description: 'main.university1',
  },
  {
    img: 'Polytech',
    description: 'main.university2',
  },
  {
    img: 'NII-Smor',
    description: 'main.university3',
  },
];

export const RESEARCH_CARD: ({ link: string } & CARD_TYPES)[] = [
  {
    img: 'research1_main',
    description: 'DEVELOPMENT OF NEW GENETICALLY ENCODED TOOLS FOR BRAIN AND HEART RESEARCH.',
    link: 'research1',
  },
  {
    img: 'research2_main',
    description: 'DEVELOPMENT OF METHODS FOR COMPUTER MODELING AND DESIGN OF CHEMICAL REACTIONS.',
    link: 'research2',
  },
  {
    img: 'research3_main',
    description: 'DEVELOPMENT OF NEW FORCE FIELDS USING MACHINE LEARNING METHODS.',
    link: 'research3',
  },
];
