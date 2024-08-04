import styles from '../../MainBoard.module.scss';
import cn from 'classnames';
import { NEWS_DATA } from '../../shared/constant';
import { NewsCard } from '../../../newsCard/NewsCard';
import { useTranslation } from 'react-i18next';
import { SubHeading } from '@/shared';

export const NewsBlock = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['block_wrapper']}>
      <SubHeading leftText={'c.'} rightText={t('main.news')} />
      <div className={styles['info_block']}>
        <div className={styles['row']}>
          <div></div>
          <div className={cn(styles['two_column'], styles['newsBlock'])}>
            {NEWS_DATA.map((news) => (
              <NewsCard
                key={news.id}
                title={news.title}
                date={news.date}
                description={news.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
