export interface HeaderProps {
  title: string;
  menu?: string[];
}

export const HEADER_LINKS: HeaderProps[] = [
  {
    title: 'RESEARCH',
  },
  {
    title: 'PUBLICATIONS',
  },
  {
    title: 'EDUCATION',
  },
  {
    title: 'ABOUT US',
  },
  {
    title: 'MORE',
    menu: ['lk', 'COLLABORATIONS', 'RESOURCES'],
  },
];

export const HEADER_TITLE_TOP = `Molecular Systems`;

export const HEADER_TITLE_BOTTOM = `Design & Engineering Group`;
