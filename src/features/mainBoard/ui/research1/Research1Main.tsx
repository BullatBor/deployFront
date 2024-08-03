import { Text } from '@/shared';
import styles from '../../MainBoard.module.scss';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

export const Research1Main = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['wrapper__main']}>
      <div className={styles['block_wrapper']}>
        <div className={cn(styles['wrapper__titles'], styles['research1'])}>
          <div className={cn(styles['wrapper__title'], styles['research1'])}>
            <div style={{ paddingRight: '100px' }}>{t('research1.mainTitle1')}</div>
            <div className={styles['wrapper__resources_title']}>{t('research1.mainTitle2')}</div>
          </div>
        </div>
        <div className={styles['row']}>
          <div></div>
          <div className={styles['wrapper__description']}>
            <Text tag='p' size='xxs2' weight='regular'>
              {t('research1.mainDescr')}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
