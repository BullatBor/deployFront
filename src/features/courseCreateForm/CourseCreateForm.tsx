import { Button, Input, Text } from '@/shared';
import styles from './CourseForm.module.scss';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler, FormProvider } from 'react-hook-form';

interface PROPS {
  isCreateType?: boolean;
}

interface FormValues {
  title_ru: string;
}

export const CourseCreateForm: FC<PROPS> = ({ isCreateType = true }) => {
  const navigate = useNavigate();
  const methods = useForm<FormValues>({
    defaultValues: {
      title_ru: '',
    },
    mode: 'onTouched',
    resetOptions: {
      keepErrors: false,
    },
  });

  const backHangler = () => {
    navigate(-1);
  };

  const onSubmitHandler: SubmitHandler<FormValues> = async () => {
    /*
    const courseInfo = await fetch('POST', {
      body: data.title_ru,
    });
    */
    navigate(`/admin/courses/editCourse/1`);
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
                {'Название курса ( ru )'}
              </Text>
              <Controller
                name='title_ru'
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
