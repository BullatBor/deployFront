export interface HeaderProps {
  title: string;
  link: string;
  menu?: { title: string; link: string }[];
}

export const HEADER_LINKS: HeaderProps[] = [
  {
    title: 'RESEARCH',
    link: 'research',
  },
  {
    title: 'PUBLICATIONS',
    link: 'publications',
  },
  {
    title: 'EDUCATION',
    link: 'education',
  },
  {
    title: 'ABOUT US',
    link: 'about',
  },
  {
    title: 'MORE',
    link: 'more',
    menu: [
      { title: 'ACCOUNT', link: 'account' },
      { title: 'COLLABORATIONS', link: 'collaborations' },
      { title: 'RESOURCES', link: 'resources' },
    ],
  },
];

export const HEADER_TITLE_TOP = `Molecular Systems`;

export const HEADER_TITLE_BOTTOM = `Design & Engineering Group`;
