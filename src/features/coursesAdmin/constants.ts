import { ICourseCard } from '@/shared';

export const MOCK_COURSES: Omit<ICourseCard, 'path'>[] = [
  {
    id: 1,
    title: 'React',
    img: 'default',
    researchArea: 'Programer',
  },
  {
    id: 2,
    title: 'Angular',
    img: 'default',
    researchArea: 'Programer',
  },
  {
    id: 3,
    title: 'Vue',
    img: 'default',
    researchArea: 'Programer',
  },
];
