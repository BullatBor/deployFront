import { useTranslation } from 'react-i18next';
import styles from '../../MainBoard.module.scss';

export const EducationResource = () => {
  const { t } = useTranslation();
  return (
    <header className={styles['wrapper__header']}>
      <div className={styles['wrapper__wrapper']}>
        <span>{t('education.education')}</span>
        <span className={styles['wrapper__lastSpan']}>{t('education.resources')}</span>
      </div>
      <div className={styles['wrapper__underline']}>
        <hr />
      </div>
    </header>
  );
};
