import { SubHeading, Text, Image } from '@/shared';
import styles from './Research2Page.module.scss';
import { OtherStudies } from '@/features';
import { OTHER_STUDIES } from './constants';
import { useTranslation } from 'react-i18next';

const Research2Page = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['research']}>
      <header className={styles['research__header']}>
        <div className={styles['research__wrapper']}>
          <span>{t('research2.title1')}</span>
          <span className={styles['research__lastSpan']}>{t('research2.title2')}</span>
        </div>
        <div className={styles['research__underline']}>
          <hr />
          <Text tag='span' size='xxs'>
            {t('research2.underline')}
          </Text>
        </div>
      </header>
      <main className={styles['research__main']}>
        <div className={styles['research__main_wrapper']}>
          <SubHeading leftText={'a.'} rightText={t('research2.mainTitle')} />
          <div className={styles['research__content']}>
            <Image image={'research2_1'} className={styles['research__img1']} />
            <Image image={'research2_2'} className={styles['research__img2']} />
            <div className={styles['research__block']}>
              <Text tag='span' size='xs'>
                {'/01/'}
              </Text>
              <Text tag='p' size='xs'>
                {t('research2.description1')}
              </Text>
            </div>
            <div />
            <Image image={'research2_3'} className={styles['research__img3']} />
            <div className={styles['research__block']}>
              <Text tag='span' size='xs'>
                {'/02/'}
              </Text>
              <Text tag='p' size='xs'>
                {t('research2.description2')}
              </Text>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles['research__footer']}>
        <div className={styles['research__footer_wrapper']}>
          <OtherStudies studies={OTHER_STUDIES} />
        </div>
      </footer>
    </div>
  );
};

export default Research2Page;
