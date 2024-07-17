import styles from './AboutStudents.module.scss';
import { Text } from '../../shared';
import { useTranslation } from 'react-i18next';

export const AboutStudents = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['students']}>
      <div className={styles['students__wrapper']}>
        <div className={styles['students__heading']}>
          <Text tag='h5' weight='regular'>
            {'b.'}
          </Text>
          <Text tag='h1' weight='regular'>
            {t('aboutStudents.heading')}
          </Text>
        </div>
        <div className={styles['students__list']}>
          {Array.from({ length: 6 }, () => '').map((_, i) => (
            <>
              <div></div>
              <div className={styles['students__name']}>
                <Text tag='h4' weight='medium'>
                  {t(`aboutStudents.students.${i}.name`)}
                </Text>
                <Text tag='span' size='xxs' weight='regular'>
                  {`/0${i + 1}/`}
                </Text>
              </div>
              <Text tag='h5' weight='regular'>
                {t(`aboutStudents.students.${i}.grade`)}
              </Text>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
