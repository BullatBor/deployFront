import { FC, useState } from 'react';
import styles from './NewsCard.module.scss';
import { Icon, Text } from '../../shared';
import cn from 'classnames';

interface Props {
  title: string;
  date: string;
  description: string;
}

export const NewsCard: FC<Props> = ({ title, date, description }) => {
  const [isVisible, setVisible] = useState(false);

  const iconHandler = () => {
    setVisible((prev) => !prev);
  };
  return (
    <div>
      <div className={styles['news']}>
        <div className={styles['news__info']}>
          <div className={styles['news__title']}>
            <Text tag='span' size='sxs' weight='medium'>
              {title}
            </Text>
          </div>
          <div className={styles['news__date']}>
            <Text
              tag='span'
              size='sxs'
              weight='medium'
              className={styles['date_text']}
            >
              {date}
            </Text>
          </div>
          <div
            className={cn(styles['news__description'], {
              [styles['news__open']]: isVisible,
            })}
          >
            <Text tag='span' size='xs' weight='regular'>
              {description}
            </Text>
          </div>
        </div>
        <div className={styles['news__iconBlock']}>
          <div
            className={cn(styles['news__icon'], {
              [styles['news__rotate']]: isVisible,
            })}
            onClick={iconHandler}
          >
            <Icon icon='news-icon' width='40' height='40' />
          </div>
        </div>
      </div>
      <div className={styles['news__border']}></div>
    </div>
  );
};
