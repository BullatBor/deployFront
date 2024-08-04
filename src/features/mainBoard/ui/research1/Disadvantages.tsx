import { SubHeading, Image, Text } from '@/shared';
import styles from '../../MainBoard.module.scss';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { NumberedList } from '@/features/numberedList';
import { leftColumnDisadvantages } from './constants';

export const Disadvantages = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['block_wrapper']}>
      <SubHeading leftText={'b.'} rightText={t('research1.disadvantages')} />
      <div className={styles['info_block']}>
        <div className={styles['row']}>
          <Text tag='span' size='sxs' weight='regular'>
            {t('research1.disAdvLeftTitle')}
          </Text>
          <div className={cn(styles['research1__rightColumn'])}>
            <Image image='default' classNames={styles['research1__disAdvImg']} />
          </div>
          <NumberedList leftColumnItems={leftColumnDisadvantages} />
        </div>
      </div>
    </div>
  );
};
