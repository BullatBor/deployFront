import styles from './SubHeading.module.scss';
import { Text } from '../text';
import { FC } from 'react';

interface ISubHeading extends Partial<HTMLDivElement> {
  leftText: string;
  rightText: string;
}

export const SubHeading: FC<ISubHeading> = ({ leftText, rightText }) => {
  return (
    <div className={styles['subHeading']} id={rightText}>
      <Text tag='h5' weight='regular'>
        {leftText}
      </Text>
      <Text tag='h1' weight='regular'>
        {rightText}
      </Text>
    </div>
  );
};
