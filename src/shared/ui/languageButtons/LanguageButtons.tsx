import { memo } from 'react';
import styles from './LanguageButtons.module.css';
import { useTranslation } from 'react-i18next';

const Buttons = () => {
  const { i18n } = useTranslation();
  return (
    <div className={styles['wrapper']}>
      <div className={styles['btn']} onClick={() => i18n.changeLanguage('en')}>
        EN
      </div>
      <div className={styles['btn']} onClick={() => i18n.changeLanguage('ru')}>
        RU
      </div>
    </div>
  );
};

export const LanguageButtons = memo(Buttons);
