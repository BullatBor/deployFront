import { TAllImages } from '../../../shared';

interface NEWS_PROPS {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface CARD_TYPES {
  img: TAllImages;
  description: string;
  link: string;
}

export const NEWS_DATA: NEWS_PROPS[] = [
  {
    id: 1,
    title:
      'НА ПЛАТФОРМЕ ОТКРЫТОЕ ОБРАЗОВАНИЕ ВЫШЕЛ НАШ ОНЛАЙН-КУРС ПО МОДЕЛИРОВАНИЮ ХИМИЧЕСКИХ РЕАКЦИЙ.',
    date: 'September 1, 2023',
    description:
      'Курс носит яркую практическую направленность и основан на проведении расчетов с использованием широко используемых квантово-химических программных пакетов ORCA и Molcas. В рамках данного 10-недельного курса обучающиеся научатся использовать методы квантовой химии и проводить расчеты свойств химических веществ и моделирование химических реакций, в том числе с использованием суперкомпьютеров. Курс носит яркую практическую направленность и основан на проведении расчетов с использованием широко используемых квантово-химических программных пакетов ORCA и Molcas.',
  },
  {
    id: 2,
    title: 'ВЫШЛА СТАТЬЯ В СБОРНИКЕ АМЕРИКАНСКОГО БИОФИЗИЧЕСКОГО ОБЩЕСТВА.',
    date: 'February 10, 2023',
    description:
      'Вышла статья в сборнике конференции Американского Биофизического Общества, в соавторстве с Николаевым Дмитрием и Михаилом Рязанцевым',
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
    img: 'default',
    description: 'DEVELOPMENT OF NEW GENETICALLY ENCODED TOOLS FOR BRAIN AND HEART RESEARCH.',
    link: 'research1',
  },
  {
    img: 'default',
    description: 'DEVELOPMENT OF METHODS FOR COMPUTER MODELING AND DESIGN OF CHEMICAL REACTIONS.',
    link: 'research2',
  },
  {
    img: 'default',
    description: 'DEVELOPMENT OF NEW FORCE FIELDS USING MACHINE LEARNING METHODS.',
    link: 'research3',
  },
];
