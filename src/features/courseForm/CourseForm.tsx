import { Button, Input, Text } from '@/shared';
import styles from './CourseForm.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CourseForm = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const backHangler = () => {
    navigate(-1);
  };

  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper__main']}>
        <form className={styles['wrapper__form']}>
          <div className={styles['wrapper__field']}>
            <Text tag='span' size='m' weight='medium'>
              Название курса
            </Text>
            <Input
              value={value}
              onChange={setValue}
              placeholder='Введите название курса'
              size='s'
              isClearable
              required
            />
          </div>
          <div className={styles['wrapper__field']}>
            <Text tag='span' size='m' weight='medium'>
              Описание курса
            </Text>
            <Input
              value={value}
              onChange={setValue}
              placeholder='Введите описание курса'
              size='s'
              isClearable
              required
            />
          </div>
          <div className={styles['wrapper__btns']}>
            <Button onClick={backHangler}>Назад</Button>
            <Button disabled>Создать</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
