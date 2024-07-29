import styles from '../../MainBoard.module.scss';
import cn from 'classnames';
import { UniversityCard } from '../../../universityCard/UniversityCard';
import { UNIVERSITY_DATA } from '../../shared/constant';
import { useTranslation } from 'react-i18next';
import { SubHeading } from '@/shared';

export const Universities = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['block_wrapper']}>
      <SubHeading leftText={'d.'} rightText={t('main.university')} />
      <div className={cn(styles['info_block'], styles['student_wrapper'])}>
        <div className={styles['row']}>
          {UNIVERSITY_DATA.map((item, index) => (
            <UniversityCard key={index} image={item.img} description={item.description} />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};
