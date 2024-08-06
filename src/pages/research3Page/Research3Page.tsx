import { SubHeading, Text, Image } from '@/shared';
import styles from './Research3Page.module.scss';
import { OtherStudies } from '@/features';
import { OTHER_STUDIES } from './constants';
import { useTranslation } from 'react-i18next';

const Research3Page = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['research']}>
      <header className={styles['research__header']}>
        <div className={styles['research__wrapper']}>
          <span>{t('research3.title1')}</span>
          <span className={styles['research__lastSpan']}>{t('research3.title2')}</span>
        </div>
        <div className={styles['research__underline']}>
          <hr style={{ width: '99%' }} />
          <Text tag='p' size='xxs'>
            {t('research3.underline')}
          </Text>
        </div>
      </header>
      <main className={styles['research__main']}>
        <div className={styles['research__main_wrapper']}>
          <SubHeading leftText={'a.'} rightText={t('research3.mainTitle1')} />
          <div className={styles['research__content']}>
            <Text tag='p' size='xs'>
              {t('research3.description1_1')}
            </Text>
            <Image image={'research1_main'} className={styles['research__img2']} />
            <div className={styles['research__block']}>
              <Text tag='p' size='xs'>
                {t('research3.description1_2')}
              </Text>
            </div>
          </div>
          <SubHeading leftText={'b.'} rightText={t('research3.mainTitle2')} />
          <div className={styles['research__content']}>
            <Text tag='p' size='xs'>
              {t('research3.description2_1')}
            </Text>
            <Image image={'research2_main'} className={styles['research__img3']} />
            <div className={styles['research__block']}>
              <Text tag='p' size='xs'>
                {t('research3.description2_2')}
              </Text>
            </div>
          </div>
          <SubHeading leftText={'c.'} rightText={t('research3.mainTitle3')} />
          <div className={styles['research__empirical']}>
            <Text tag='h3' weight='medium' className={styles['research__row1']}>
              {t('research3.description3')}
            </Text>
            <hr />
            <div className={styles['research__row2']}>
              <Image image={'research3_1'} className={styles['research__img1']} />
              <div className={styles['research__infoBlock']}>
                <Text tag='h4' weight='medium'>
                  {t('research3.advantages').toUpperCase()}
                </Text>
                <div>
                  <Text tag='p' size='xs'>
                    {t('research3.advantages1')}
                  </Text>
                  <Text tag='p' size='xs'>
                    {t('research3.advantages2')}
                  </Text>
                </div>
              </div>
            </div>
            <hr />
            <div className={styles['research__row2']}>
              <div />
              <div className={styles['research__infoBlock']}>
                <Text tag='h4' weight='medium'>
                  {t('research3.disadvantages').toUpperCase()}
                </Text>
                <div>
                  <Text tag='p' size='xs'>
                    {t('research3.disadvantages1')}
                  </Text>
                  <Text tag='p' size='xs'>
                    {t('research3.disadvantages2')}
                  </Text>
                </div>
              </div>
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

export default Research3Page;
