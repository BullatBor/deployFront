import styles from './AboutResearch.module.scss';
import { Icon, Text } from '../../shared';
import { useTranslation } from 'react-i18next';

export const AboutResearch = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['research']}>
      <div className={styles['research__wrapper']}>
        <div className={styles['research__heading']}>
          <Text tag='h5' weight='regular'>
            {'a.'}
          </Text>
          <Text tag='h1' weight='regular'>
            {t('aboutResearch.heading')}
          </Text>
        </div>
        <div className={styles['research__addition']}>
          <div></div>
          <Text tag='p' size='xs' weight='regular'>
            {t('aboutResearch.addition')}
          </Text>
        </div>
        <div className={styles['research__hero']}>
          <div className={styles['research__img']}>
            <img src='src/shared/ui/icon/assets/images/default.png' alt='image' />
          </div>
          <div className={styles['research__content']}>
            {Array.from({ length: 4 }, () => '').map((_, i) => (
              <div className={styles['research__body']}>
                <Icon icon={'dna'} widthAndHeight='50px' />
                <div className={styles['research__employee']}>
                  <Text tag='h4' weight='medium'>
                    {t(`aboutResearch.researchers.${i}.name`)}
                  </Text>
                  <Text tag='h5' weight='medium'>
                    {t(`aboutResearch.researchers.${i}.profession`)}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
