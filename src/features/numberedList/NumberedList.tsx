import { FC } from 'react';
import styles from './NumberedList.module.scss';
import { Text } from '@/shared';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

interface PROPS {
  leftColumnItems: string[];
  rightColumnItems?: string[];
  className?: string;
}

export const NumberedList: FC<PROPS> = ({ leftColumnItems, rightColumnItems, className }) => {
  const { t } = useTranslation();
  return (
    <div className={cn(styles['wrapper'], className)}>
      <div className={styles[rightColumnItems ? 'wrapper__columns' : 'wrapper__oneColumn']}>
        {leftColumnItems.map((description, index) => {
          return (
            <div className={styles['wrapper__item']}>
              <Text tag='span' size='xss' weight='medium' className={styles['wrapper__number']}>
                {`/0${index + 1}/`}
              </Text>
              <Text tag='span' size='xs' weight='regular'>
                {t(description)}
              </Text>
            </div>
          );
        })}
      </div>
      {rightColumnItems && (
        <div className={styles['wrapper__columns']}>
          {rightColumnItems.map((description, index) => {
            return (
              <div className={styles['wrapper__item']}>
                <Text tag='span' size='xss' weight='medium' className={styles['wrapper__number']}>
                  {`/0${index + leftColumnItems.length + 1}/`}
                </Text>
                <Text tag='span' size='xs' weight='regular'>
                  {t(description)}
                </Text>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
