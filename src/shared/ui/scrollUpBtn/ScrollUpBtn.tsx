import { Icon } from '../icon';
import styles from './ScrollUpBtn.module.scss';

export const ScrollUpBtn = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles['btn']} onClick={() => handleClick()}>
      <Icon icon='arrow-up' width='50px' height='50px' />
    </div>
  );
};
