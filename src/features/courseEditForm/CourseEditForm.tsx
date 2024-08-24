import { Button, FileLoader, Input, Text, ImageFileType, useGetCourseInfoQuery } from '@/shared';
import styles from './CourseEditForm.module.scss';
import { FC } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useForm, Controller, SubmitHandler, FormProvider } from 'react-hook-form';
import cn from 'classnames';

interface FormValues {
  title_ru: string;
  title_en?: string;
  description_ru?: string;
  description_en?: string;
  imageUrl?: string;
  isOpen?: boolean;
}

interface Props {
  courseId: string;
}

export const CourseEditForm: FC<Props> = ({ courseId }) => {
  const { data } = useGetCourseInfoQuery({
    courseId,
    userId: 'c30b5204-0ad9-4620-b9b0-089c63ce404c',
  });

  const methods = useForm<FormValues>({
    defaultValues: {
      title_ru: data?.title_ru || 'test',
      title_en: data?.title_en || '',
      description_ru: data?.description_ru || '',
      description_en: data?.description_en || '',
      imageUrl: data?.imageUrl || '',
      isOpen: data?.isOpen || true,
    },
    mode: 'onTouched',
    resetOptions: {
      keepErrors: false,
    },
  });

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
            <Text tag='span' size='l' weight='medium'>
              Общая информация
            </Text>
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
            <div className={cn(styles['wrapper__field'], styles['bottom_border'])}>
              <Text tag='span' size='m' weight='medium'>
                Название курса ( en )
              </Text>
              <Controller
                name='title_en'
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
                Описание курса ( ru )
              </Text>
              <Controller
                name='description_ru'
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <ReactTextareaAutosize value={value} onChange={onChange} rows={4} />
                  </>
                )}
              />
            </div>
            <div className={cn(styles['wrapper__field'], styles['bottom_border'])}>
              <Text tag='span' size='m' weight='medium'>
                Описание курса ( en )
              </Text>
              <Controller
                name='description_en'
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
                    <FileLoader
                      image={value}
                      onChange={onChange}
                      type='img'
                      acceptedFileTypes={ImageFileType}
                    />
                  </>
                )}
              />
            </div>
            <div className={styles['wrapper__btns']}>
              <div></div>
              <Button type='submit' disabled={!methods.formState.isValid}>
                Сохранить
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
