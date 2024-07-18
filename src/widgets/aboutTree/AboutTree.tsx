import styles from './AboutTree.module.scss';
import { Text } from '../../shared';
import { useTranslation } from 'react-i18next';

export const AboutTree = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['tree']}>
      <div className={styles['tree__wrapper']}>
        <div className={styles['tree__heading']}>
          <Text tag='h5' weight='regular'>
            {'c.'}
          </Text>
          <Text tag='h1' weight='regular'>
            {t('aboutTree.heading')}
          </Text>
        </div>
        <div className={styles['tree__image']}>
          <img src='src/shared/ui/icon/assets/images/academic_tree.png' alt='tree' />
        </div>
      </div>
    </div>
  );
};
