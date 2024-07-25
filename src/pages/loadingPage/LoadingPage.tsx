import styles from './LoadingPage.module.scss';

const LoadingPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.preloader} />
    </div>
  );
};

export default LoadingPage;
