import styles from '../../MainBoard.module.scss';
import cn from 'classnames';
import { NEWS_DATA } from '../../shared/constant';
import { NewsCard } from '../../../newsCard/NewsCard';
import { useTranslation } from 'react-i18next';
import { SubHeading } from '@/shared';

export const NewsBlock = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
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
                title={
                  language === 'ru' ? news.title_ru.toUpperCase() : news.title_en.toUpperCase()
                }
                date={news.date}
                description={
                  language === 'ru'
                    ? news.description_ru.toUpperCase()
                    : news.description_en.toUpperCase()
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
