import { SubHeading, Text, Image } from '@/shared';
import { useTranslation } from 'react-i18next';
import styles from '../../MainBoard.module.scss';
import cn from 'classnames';

export const Results = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['block_wrapper']}>
      <SubHeading leftText={'d.'} rightText={t('research1.results')} />
      <div className={styles['info_block']}>
        <div className={styles['row']}>
          <div></div>
          <div className={cn(styles['research1__ourTask'])}>
            <Text tag='span' size='sxs' weight='medium'>
              {t('research1.resultsDescr')}
            </Text>
            <Image image='research1_4' classNames={styles['research1__resultImage1']} />
          </div>
          <div className={styles['research1__resultLeftImage']}>
            <Image image='research1_5' classNames={styles['research1__resultImage2']} />
          </div>
        </div>
      </div>
    </div>
  );
};
