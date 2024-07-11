import { memo } from 'react';
import styles from './LanguageButtons.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from '../text';

const Buttons = () => {
  const { i18n } = useTranslation();
  return (
    <div className={styles['wrapper']}>
      <div onClick={() => i18n.changeLanguage('en')}>
        <Text tag='span' size='xxs' weight='semibold' className={styles['btn']}>
          EN
        </Text>
      </div>
      <div onClick={() => i18n.changeLanguage('ru')}>
        <Text tag='span' size='xxs' weight='semibold' className={styles['btn']}>
          RU
        </Text>
      </div>
    </div>
  );
};

export const LanguageButtons = memo(Buttons);
