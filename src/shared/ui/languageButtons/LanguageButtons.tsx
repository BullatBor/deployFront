import { memo } from 'react';
import styles from './LanguageButtons.module.css';

const Buttons = () => {
  return (
    <div className={styles['wrapper']}>
      <h5>EN</h5> <h5>RU</h5>
    </div>
  );
};

export const LanguageButtons = memo(Buttons);
