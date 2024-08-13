import { Button, FileLoader, Input, Text } from '@/shared';
import styles from './CourseForm.module.scss';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useForm, Controller, SubmitHandler, FormProvider } from 'react-hook-form';

interface PROPS {
  isCreateType?: boolean;
}

interface FormValues {
  courseName: string;
  courseDescription: string;
  courseImage: string;
  coursePrice: string;
}

export const CourseForm: FC<PROPS> = ({ isCreateType = true }) => {
  const navigate = useNavigate();
  const methods = useForm<FormValues>({
    defaultValues: {
      courseName: '',
      courseDescription: '',
      courseImage: '',
      coursePrice: '',
    },
    mode: 'onTouched',
    resetOptions: {
      keepErrors: false,
    },
  });

  const backHangler = () => {
    navigate(-1);
  };

  const onSubmitHandler: SubmitHandler<FormValues> = () => {
    return null;
  };

  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper__main']}>
        <FormProvider {...methods}>
          <form
            className={styles['wrapper__form']}
            onSubmit={methods.handleSubmit(onSubmitHandler)}
          >
            <div className={styles['wrapper__field']}>
              <Text tag='span' size='m' weight='medium'>
                Название курса
              </Text>
              <Controller
                name='courseName'
                rules={{ required: true }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <>
                    <Input
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      placeholder='Введите название курса'
                      size='s'
                      isClearable
                    />
                  </>
                )}
              />
            </div>
            <div className={styles['wrapper__field']}>
              <Text tag='span' size='m' weight='medium'>
                Описание курса
              </Text>
              <Controller
                name='courseDescription'
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <ReactTextareaAutosize value={value} onChange={onChange} rows={4} />
                  </>
                )}
              />
            </div>
            <div className={styles['wrapper__field']}>
              <Text tag='span' size='m' weight='medium'>
                Загрузка изображения
              </Text>
              <Controller
                name='courseImage'
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <FileLoader image={value} onChange={onChange} />
                  </>
                )}
              />
            </div>
            <div className={styles['wrapper__field']}>
              <Text tag='span' size='m' weight='medium'>
                Цена курса
              </Text>
              <Controller
                name='coursePrice'
                rules={{ required: true }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <>
                    <Input
                      type='number'
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      placeholder='Введите цену за курс'
                      size='s'
                      step='0.001'
                      isClearable
                    />
                  </>
                )}
              />
            </div>
            <div className={styles['wrapper__btns']}>
              <Button onClick={backHangler}>Назад</Button>
              <Button type='submit' disabled={!methods.formState.isValid}>
                {isCreateType ? 'Создать' : 'Сохранить'}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
