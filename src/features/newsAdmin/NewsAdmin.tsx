import { Button, Text } from '@/shared';
import { useNavigate } from 'react-router-dom';
import styles from './NewsAdmin.module.scss';
import { NEWS_DATA } from '../mainBoard/shared/constant';
import { useTranslation } from 'react-i18next';

const NewsAdmin = () => {
  const navigate = useNavigate();
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <div className={styles['wrapper']}>
      <header className={styles['wrapper__header']}>
        <Button size='m' width='content' href='/admin/news/createNew'>
          {'Создать новость'}
        </Button>
      </header>
      <main className={styles['wrapper__news']}>
        {NEWS_DATA.map((news) => (
          <div className={styles['wrapper__block']} key={news.id}>
            <div onClick={() => navigate(`/admin/news/editNew/${news.id}`, { state: news })}>
              <Text tag='h3' weight='semibold'>
                {language === 'ru' ? news.title_ru.toUpperCase() : news.title_en.toUpperCase()}
              </Text>
              <Text tag='p' weight='medium'>
                {language === 'ru'
                  ? news.description_ru.toUpperCase()
                  : news.description_en.toUpperCase()}
              </Text>
              <Text tag='p' weight='medium'>
                {news.date}
              </Text>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default NewsAdmin;
