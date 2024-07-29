import styles from './AboutTree.module.scss';
import { SubHeading } from '../../shared';
import { useTranslation } from 'react-i18next';

export const AboutTree = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['tree']}>
      <div className={styles['tree__wrapper']}>
        <SubHeading leftText={'c.'} rightText={t('aboutTree.heading')} />
        <div className={styles['tree__image']}>
          <img src='src/shared/ui/icon/assets/images/academic_tree.png' alt='tree' />
        </div>
      </div>
    </div>
  );
};
