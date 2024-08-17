import { Text } from '@/shared';
import styles from '../../MainBoard.module.scss';
import { useTranslation } from 'react-i18next';

export const LogoBlock = () => {
  const { t } = useTranslation();
  return (
    <header className={styles['wrapper__header_main']}>
      <div className={styles['wrapper__wrapper_main']}>
        <span>{'Molecular'}</span>
        <span>{'Systems Design & Engineering Group'}</span>
      </div>
      <div className={styles['wrapper__underline']}>
        <hr />
        <div>
          <Text tag='span' size='xxs'>
            {t('main.description')}
          </Text>
        </div>
      </div>
    </header>
  );
};
