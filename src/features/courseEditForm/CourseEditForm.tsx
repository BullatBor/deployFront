import {
  Button,
  FileLoader,
  Input,
  Text,
  ImageFileType,
  useGetCourseInfoQuery,
  useUpdateСourseMutation,
} from '@/shared';
import styles from './CourseEditForm.module.scss';
import { FC, useEffect } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useForm, Controller, SubmitHandler, FormProvider } from 'react-hook-form';
import cn from 'classnames';

interface FormValues {
  title_ru: string;
  title_en: string;
  description_ru: string;
  description_en: string;
  imageUrl?: string;
  isPublished: boolean;
}

interface Props {
  courseId: string;
}

export const CourseEditForm: FC<Props> = ({ courseId }) => {
  const { data } = useGetCourseInfoQuery({
    courseId,
    userId: 'c30b5204-0ad9-4620-b9b0-089c63ce404c',
  });

  const [update] = useUpdateСourseMutation();

  const methods = useForm<FormValues>({
    defaultValues: {
      title_ru: data?.title_ru || 'test',
      title_en: data?.title_en || '',
      description_ru: data?.description_ru || '',
      description_en: data?.description_en || '',
      imageUrl: data?.imageUrl || '',
      isPublished: data?.isOpen || true,
    },
    mode: 'onTouched',
    resetOptions: {
      keepErrors: false,
    },
  });

  const { reset } = methods;

  useEffect(() => {
    if (data) reset(data);
  }, [data, reset]);

  const onSubmitHandler: SubmitHandler<FormValues> = (data) => {
    const formData = new FormData();
    formData.append('id', courseId);
    formData.append('title_ru', data.title_ru);
    formData.append('title_en', data.title_en);
    formData.append('description_ru', data.description_ru);
    formData.append('description_en', data.description_en);
    formData.append('isPublished', data.isPublished ? 'true' : 'false');
    if (data.imageUrl && typeof data.imageUrl !== 'string') {
      formData.append('img', data.imageUrl);
    }

    update(formData);
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
            <div className={styles['wrapper__field']}>
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
            <div
              className={cn(
                styles['wrapper__field'],
                styles['bottom_border'],
                styles['wrapper__isOpen'],
              )}
            >
              <Text tag='span' size='m' weight='medium'>
                Курс будет опубликован?
              </Text>
              <Controller
                name='isPublished'
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <>
                    <input type='checkbox' checked={value} onChange={onChange} />
                  </>
                )}
              />
            </div>
            <div className={styles['wrapper__field']}>
              <Text tag='span' size='m' weight='medium'>
                Загрузка изображения
              </Text>
              <Controller
                name='imageUrl'
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
                Обновить
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
