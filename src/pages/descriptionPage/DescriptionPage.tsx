import { useLocation } from 'react-router-dom';
import styles from './DescriptionPage.module.scss';
import { ICourseCard, Image, Text } from '@/shared';

const DescriptionPage = () => {
  const location: Omit<ICourseCard, 'id'> = useLocation().state;
  return (
    <div className={styles['desc']}>
      <header className={styles['desc__header']}>
        <div className={styles['desc__title']}>
          <Text tag='h2'>Course about {location.title}</Text>
          <Text tag='span'>{location.researchArea}</Text>
        </div>
        <Image image={location.img} className={styles['desc__img']} />
      </header>
      <main className={styles['desc__main']}>
        <Text tag='h2'>{'Description'}</Text>
        <Text tag='p'>{location.description}</Text>
      </main>
    </div>
  );
};

export default DescriptionPage;
