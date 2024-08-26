import { useLocation } from 'react-router-dom';
import styles from './DescriptionPage.module.scss';
import { ICourseCard, Text } from '@/shared';

const DescriptionPage = () => {
  const location: Omit<ICourseCard, 'id'> = useLocation().state;
  return (
    <div className={styles['desc']}>
      <header className={styles['desc__header']}>
        <div className={styles['desc__title']}>
          <Text tag='h2'>{location.title_ru}</Text>
          <Text tag='span'>{location.researchArea}</Text>
        </div>
        <img src={location.imageUrl} className={styles['desc__img']} alt='Course image' />
      </header>
      <main className={styles['desc__main']}>
        <Text tag='h2'>{'Description'}</Text>
        <Text tag='p'>{location.description_ru}</Text>
      </main>
    </div>
  );
};

export default DescriptionPage;
