import { Button, FileLoader, Input, Text } from '@/shared';
import styles from './CourseForm.module.scss';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactTextareaAutosize from 'react-textarea-autosize';

interface PROPS {
  isCreateType?: boolean;
}

export const CourseForm: FC<PROPS> = ({ isCreateType = true }) => {
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
            <ReactTextareaAutosize rows={4} />
          </div>
          <div className={styles['wrapper__field']}>
            <Text tag='span' size='m' weight='medium'>
              Загрузка изображения
            </Text>
            <FileLoader />
          </div>
          <div className={styles['wrapper__field']}>
            <Text tag='span' size='m' weight='medium'>
              Цена курса
            </Text>
            <Input
              type='number'
              value={value}
              onChange={setValue}
              placeholder='Введите цену за курс'
              size='s'
              step='0.001'
              isClearable
              required
            />
          </div>
          <div className={styles['wrapper__btns']}>
            <Button onClick={backHangler}>Назад</Button>
            <Button disabled>{isCreateType ? 'Создать' : 'Сохранить'}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
