import React from 'react';
import styles from './MainBoard.module.css';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

export const MainBoard = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles['wrapper']}>
      <div className={styles['titles']}>
        <div className={styles['title']}>Molecular</div>
        <div className={styles['title']}>Systems Design &</div>
        <div className={styles['title']}>Engineering Group</div>
      </div>
      <div className={styles['descriptions']}>
        <div
          className={cn(styles['description'], {
            [styles['ru_style']]: i18n.language === 'ru',
          })}
        >
          {t('main.description')}
        </div>
      </div>
    </div>
  );
};
