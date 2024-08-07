import styles from './AboutDesc.module.scss';
import { Image, Text } from '../../shared';
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
            <div>
              <Image image={'research3_1'} className={styles['desc__leftImage']} />
              <div className={styles['desc__bubble']}>
                <Image image={'about2'} className={styles['desc__rightImage']} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['desc__rightBlock']}>
          <Image image={'about2'} className={styles['desc__rightImage']} />
        </div>
      </div>
    </div>
  );
};
