import { Button, Image } from '@/shared';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={styles.wrapper}>
      <Image image={'errorElement'} />
      <div className={styles.container}>
        <Button href={'/'} width={'max'} onClick={() => (document.title = 'MSDE Group')}>
          Вернуться на главную страницу
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
