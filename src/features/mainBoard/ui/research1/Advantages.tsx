import { SubHeading, Image, Text } from '@/shared';
import styles from '../../MainBoard.module.scss';
import { useTranslation } from 'react-i18next';
import { NumberedList } from '@/features/numberedList';
import { leftColumnAdvantages, rightColumnAdvantages } from './constants';

export const Advantages = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['block_wrapper']}>
      <SubHeading leftText={'a.'} rightText={t('research1.advantages')} />
      <div className={styles['info_block']}>
        <div className={styles['row']}>
          <Text tag='span' size='sxs' weight='regular'>
            Родопсины уже нашли применение для изучения работы головного мозга, позволяя в режиме
            реального времени отслеживать активность нейронов при помощи оптических методов.
            Преимущества этих молекулярных инструментов:
          </Text>
          <Image
            image='research1_1'
            width='280px'
            height='450px'
            classNames={styles['research1__disAdvImg']}
          />
          <NumberedList
            leftColumnItems={leftColumnAdvantages}
            rightColumnItems={rightColumnAdvantages}
          />
        </div>
      </div>
    </div>
  );
};
