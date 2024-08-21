import { useCallback, useState } from 'react';
import styles from './UserBlock.module.scss';
import { useNavigate } from 'react-router-dom';
import { Icon, Text, useAppDispatch } from '@/shared';
import { signOut } from '@/shared/api/authSlice';

export const UserBlock = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOutClick = useCallback(() => {
    try {
      dispatch(signOut());
      navigate('/main');
    } catch (error) {
      alert(error);
    }
  }, [dispatch, navigate]);

  return (
    <div
      className={styles['userBlock']}
      onClick={() => setVisible(true)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <Icon icon={'user'} widthAndHeight='25px' />
      {isVisible && (
        <div className={styles['userBlock__dropdown']} onClick={handleOutClick}>
          <Text tag='span' weight='semibold'>
            {'Sign out'}
          </Text>
        </div>
      )}
    </div>
  );
};
