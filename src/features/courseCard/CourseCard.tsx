import { FC } from 'react';
import styles from './CourseCard.module.scss';
import { IСourseDto, Image, Text } from '@/shared';
import { useNavigate } from 'react-router-dom';

export const CourseCard: FC<IСourseDto & { path: string; researchArea?: string }> = ({
  researchArea,
  title_ru,
  description_ru,
  imageUrl,
  path,
}) => {
  const navigate = useNavigate();
  const cardHandler = () => {
    navigate(path, { state: { title_ru, imageUrl, researchArea, description_ru } });
  };
  return (
    <div className={styles['wrapper']} onClick={cardHandler}>
      <div className={styles['wrapper__main']}>
        <Image image={imageUrl || 'default'} />
        <div className={styles['wrapper__descr']}>
          <Text tag='span' size='s' weight='semibold'>
            {title_ru}
          </Text>
          <Text tag='span' size='xs' weight='regular'>
            {description_ru}
          </Text>
        </div>
      </div>
    </div>
  );
};
