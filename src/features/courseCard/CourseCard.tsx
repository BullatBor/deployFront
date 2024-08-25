import { FC } from 'react';
import styles from './CourseCard.module.scss';
import { ICourseCard, Image, Text } from '@/shared';
import { useNavigate } from 'react-router-dom';

export const CourseCard: FC<ICourseCard> = ({ title, img, researchArea, path, description }) => {
  const navigate = useNavigate();
  const cardHandler = () => {
    navigate(path, { state: { title, img, researchArea, description } });
  };
  return (
    <div className={styles['wrapper']} onClick={cardHandler}>
      <div className={styles['wrapper__main']}>
        <Image image={img} />
        <div className={styles['wrapper__descr']}>
          <Text tag='span' size='s' weight='semibold'>
            {title}
          </Text>
          <Text tag='span' size='xs' weight='medium'>
            {researchArea}
          </Text>
        </div>
      </div>
    </div>
  );
};
