import styles from '../../MainBoard.module.scss';
import cn from 'classnames';
import { NEWS_DATA } from '../../shared/constant';
import { NewsCard } from '../../../newsCard/NewsCard';
import { useTranslation } from 'react-i18next';

export const NewsBlock = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['block_wrapper']}>
      <div className={styles['block_title']}>
        <div className={styles['row']}>
          <div className={styles['variant']}>c.</div>
          <div className={cn(styles['title_text'], styles['two_column'])}>{t('main.news')}</div>
        </div>
      </div>
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
