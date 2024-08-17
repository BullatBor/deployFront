import styles from './AboutTree.module.scss';
import { SubHeading, Image } from '../../shared';
import { useTranslation } from 'react-i18next';

export const AboutTree = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['tree']}>
      <div className={styles['tree__wrapper']}>
        <SubHeading leftText={'c.'} rightText={t('aboutTree.heading')} />
        <div className={styles['tree__image']}>
          <Image image={'academicTree'} />
        </div>
      </div>
    </div>
  );
};
