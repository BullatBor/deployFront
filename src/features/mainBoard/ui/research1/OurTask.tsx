import { SubHeading, Image, Text } from '@/shared';
import styles from '../../MainBoard.module.scss';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { NumberedList } from '@/features/numberedList';
import {
  leftColumnCombine,
  leftColumnExperMethods,
  rightColumnCombine,
  rightColumnExperMethods,
} from './constants';

export const OurTask = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['block_wrapper']}>
      <SubHeading leftText={'c.'} rightText={t('research1.ourTask')} />
      <div className={cn(styles['info_block'], styles['research1__ourTaskInfo'])}>
        <div className={styles['row']}>
          <Image image='research1_2' classNames={styles['research1__hideImg']} />
          <div className={cn(styles['two_column'], styles['research1__ourTask'])}>
            <Text tag='span' size='ms' weight='medium'>
              {t('research1.ourGoalTitle')}
            </Text>
            <div>
              <Image image='research1_3' classNames={styles['research1__taskImage']} />
            </div>
          </div>
        </div>
        <div className={styles['row']}>
          <div></div>
          <div className={cn(styles['research1__ourTaskItems'], styles['two_column'])}></div>
        </div>
        <div className={styles['row']}>
          <div></div>
          <Text tag='span' size='s' weight='medium' className={styles['research1__ourTaskDesc']}>
            {t('research1.combineTitle')}
          </Text>
          <NumberedList leftColumnItems={leftColumnCombine} rightColumnItems={rightColumnCombine} />
          <Image image='research1_2' classNames={styles['research1__hideElem']} />
        </div>
        <div className={styles['row']}>
          <div></div>
          <div className={cn(styles['research1__ourTaskItems'], styles['two_column'])}></div>
        </div>
        <div className={styles['row']}>
          <div></div>
          <Text tag='span' size='s' weight='medium' className={styles['research1__ourTaskDesc']}>
            {t('research1.experMethodsTitle')}
          </Text>
          <NumberedList
            leftColumnItems={leftColumnExperMethods}
            rightColumnItems={rightColumnExperMethods}
          />
        </div>
      </div>
    </div>
  );
};
