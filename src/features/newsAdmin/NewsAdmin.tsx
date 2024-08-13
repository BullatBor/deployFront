import { Button, Text } from '@/shared';
import { useNavigate } from 'react-router-dom';
import styles from './NewsAdmin.module.scss';
import { NEWS_DATA } from '../mainBoard/shared/constant';

const NewsAdmin = () => {
  const navigate = useNavigate();

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
                {news.title.toUpperCase()}
              </Text>
              <Text tag='p' weight='medium'>
                {news.description}
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
