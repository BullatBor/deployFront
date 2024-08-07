import styles from './AboutResearch.module.scss';
import { Icon, SubHeading, Text, Image } from '../../shared';
import { useTranslation } from 'react-i18next';

export const AboutResearch = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['research']}>
      <div className={styles['research__wrapper']}>
        <SubHeading leftText={'a.'} rightText={t('aboutResearch.heading')} />
        <div className={styles['research__box']}>
          <div className={styles['research__addition']}>
            <Text tag='p' size='xs' weight='regular'>
              {t('aboutResearch.addition')}
            </Text>
          </div>
          <div className={styles['research__hero']}>
            <div className={styles['research__img']}>
              <Image image={'about3'} />
            </div>
            <div className={styles['research__content']}>
              {Array.from({ length: 4 }, () => '').map((_, i) => (
                <div className={styles['research__body']}>
                  <Icon icon={'dna'} widthAndHeight='50px' />
                  <div className={styles['research__employee']}>
                    <Text tag='h4' weight='medium'>
                      {t(`aboutResearch.researchers.${i}.name`)}
                    </Text>
                    <Text tag='h5' weight='regular'>
                      {t(`aboutResearch.researchers.${i}.profession`)}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
