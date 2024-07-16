import styles from '../../MainBoard.module.scss';
import cn from 'classnames';
import { UniversityCard } from '../../../universityCard/UniversityCard';
import { UNIVERSITY_DATA } from '../../shared/constant';
import { useTranslation } from 'react-i18next';

export const Universities = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['block_wrapper']}>
      <div className={styles['block_title']}>
        <div className={styles['row']}>
          <div className={styles['variant']}>e.</div>
          <div className={cn(styles['title_text'], styles['two_column'])}>
            {t('main.university')}
          </div>
        </div>
      </div>
      <div className={cn(styles['info_block'], styles['student_wrapper'])}>
        <div className={styles['row']}>
          {UNIVERSITY_DATA.map((item) => (
            <UniversityCard image={item.img} description={item.description} />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};
