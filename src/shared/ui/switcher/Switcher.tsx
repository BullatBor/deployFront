import styles from './Switcher.module.scss';
import { Text } from '@/shared';
import cn from 'classnames';
import { FC } from 'react';

interface PROPS {
  leftLabel: string;
  rightLabel: string;
  value: 1 | 2;
  size?: 's' | 'xs';
  onChange: () => void;
}

export const Switcher: FC<PROPS> = ({ value, leftLabel, rightLabel, size = 's', onChange }) => {
  return (
    <div className={styles['wrapper']}>
      <div
        className={cn(styles['wrapper__item'], { [styles['activeFirst']]: value === 1 })}
        onClick={onChange}
      >
        <Text tag='span' size={size} weight='medium'>
          {leftLabel}
        </Text>
      </div>
      <div
        className={cn(styles['wrapper__item'], { [styles['activeSecond']]: value === 2 })}
        onClick={onChange}
      >
        <Text tag='span' size={size} weight='medium'>
          {rightLabel}
        </Text>
      </div>
    </div>
  );
};
