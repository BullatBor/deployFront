import { FC } from 'react';
import { Image } from '../../shared/ui/icon/Image';
import { TAllImages, Text } from '../../shared';
import styles from './University.module.scss';

interface Props {
  image: TAllImages;
  description: string;
}

export const UniversityCard: FC<Props> = ({ image, description }) => {
  return (
    <div className={styles['wrapper']}>
      <Image image={image} classNames={styles['wrapper__logo']} />
      <Text tag='span' size='xs' weight='regular'>
        {description}
      </Text>
    </div>
  );
};
