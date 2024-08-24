import styles from './Switcher.module.scss';
import { Text } from '@/shared';
import cn from 'classnames';
import { FC } from 'react';

interface PROPS {
  value: 1 | 2;
  onChange: (value: 1 | 2) => void;
}

export const Switcher: FC<PROPS> = ({ value, onChange }) => {
  return (
    <div className={styles['wrapper']}>
      <div
        className={cn(styles['wrapper__item'], { [styles['activeFirst']]: value === 1 })}
        onClick={() => onChange(1)}
      >
        <Text tag='span' size='s' weight='medium'>
          обычно
        </Text>
      </div>
      <div
        className={cn(styles['wrapper__item'], { [styles['activeSecond']]: value === 2 })}
        onClick={() => onChange(2)}
      >
        <Text tag='span' size='s' weight='medium'>
          тесты
        </Text>
      </div>
    </div>
  );
};
