export interface IMock {
  order: number;
  title: string;
  description: string;
}

export const MOCKED_VALUES: IMock[] = [
  { order: 1, title: 'Intro & Demo', description: 'Здесь рассказывается про' },
  { order: 2, title: 'Environment Setup', description: 'Здесь рассказывается про' },
  { order: 3, title: 'Folders Setup', description: 'Здесь рассказывается про' },
  { order: 4, title: 'Authentication', description: 'Здесь рассказывается про' },
  { order: 5, title: 'Layout', description: 'Здесь рассказывается про' },
  { order: 6, title: 'Dynamic Layout', description: 'Здесь рассказывается про' },
  { order: 7, title: 'Course Creation UI', description: 'Здесь рассказывается про' },
  { order: 8, title: 'Prisma & DB Setup', description: 'Здесь рассказывается про' },
  { order: 9, title: 'Course Creation API', description: 'Здесь рассказывается про' },
  { order: 10, title: 'Course Edit Page UI', description: 'Здесь рассказывается про' },
  { order: 11, title: 'Course Title Form', description: 'Здесь рассказывается про' },
  { order: 12, title: 'Course Description Form', description: 'Здесь рассказывается про' },
  { order: 13, title: 'Upload Thing & Image Form', description: 'Здесь рассказывается про' },
  { order: 14, title: 'Course Category Form', description: 'Здесь рассказывается про' },
];
