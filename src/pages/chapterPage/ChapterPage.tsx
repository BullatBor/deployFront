import { useParams } from 'react-router-dom';
import { Text } from '@/shared';
import { MOCKED_VALUES } from '../coursePage/constants';
import styles from './ChapterPage.module.scss';

export const ChapterPage = () => {
  const id = useParams().chapter as string;
  const chapter = MOCKED_VALUES.find((chapter) => chapter.order === +id);

  return (
    <div className={styles['chapter']}>
      <header className={styles['chapter__header']}>
        <Text tag='h2'>{chapter?.title}</Text>
        <Text tag='span'>Chapter: {chapter?.order}</Text>
      </header>
      <main className={styles['chapter__main']}>
        <Text tag='p'>{`${chapter?.description} ${chapter?.title}`}</Text>
      </main>
    </div>
  );
};

export default ChapterPage;
