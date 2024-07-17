import { useTranslation } from 'react-i18next';
import styles from '../../MainBoard.module.scss';

export const EducationResource = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper__main']}>
        <div className={styles['wrapper__titles']}>
          <div className={styles['wrapper__title']}>
            <div>{t('education.education')}</div>
            <div className={styles['wrapper__resources_title']}>{t('education.resources')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
