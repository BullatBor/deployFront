import { useTranslation } from 'react-i18next';
import styles from '../../MainBoard.module.scss';
import cn from 'classnames';

export const LogoBlock = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='wrapper'>
      <div className={styles['wrapper__main']}>
        <div>
          <div className={styles['wrapper__title']}>Molecular</div>
          <div className={styles['wrapper__title']}>Systems Design &</div>
          <div className={styles['wrapper__title']}>Engineering Group</div>
        </div>
        <div className={styles['wrapper__descriptions']}>
          <div className={styles['row']}>
            <div></div>
            <div
              className={cn(styles['wrapper__description'], {
                [styles['ru_style']]: i18n.language === 'ru',
              })}
            >
              {t('main.description')}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
