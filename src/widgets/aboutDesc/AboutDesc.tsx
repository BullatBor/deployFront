import styles from './AboutDesc.module.scss';
import { Text } from '../../shared';
import { useTranslation } from 'react-i18next';

export const AboutDesc = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['desc']}>
      <div className={styles['desc__wrapper']}>
        <div className={styles['desc__leftBlock']}>
          <Text tag='p' weight='medium' className={styles['desc__heading']}>
            {t('aboutDesc.heading')}
          </Text>
          <div className={styles['desc__body']}>
            <Text tag='h5' weight='regular' className={styles['desc__text']}>
              {t('aboutDesc.text')}
            </Text>
            <img src='src/shared/ui/icon/assets/images/default.png' alt='image' />
          </div>
        </div>
        <div className={styles['desc__rightBlock']}>
          <img src='src/shared/ui/icon/assets/images/default.png' alt='image' />
        </div>
      </div>
    </div>
  );
};
