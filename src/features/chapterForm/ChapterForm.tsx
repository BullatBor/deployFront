import { Button, FileLoader, Image, Text, TextController } from '@/shared';
import styles from './ChapterForm.module.scss';
import { FC, useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useForm, Controller, SubmitHandler, FormProvider } from 'react-hook-form';
import cn from 'classnames';

interface FormValues {
  courseId: string;
  position: number;
  title_ru?: string;
  description_ru?: string;
  title_en?: string;
  description_en?: string;
  isOpen: boolean;
}

interface Props extends FormValues {
  isEditMode?: boolean;
}

export const ChapterForm: FC<Props> = (data) => {
  const [isEdit, setIsEdit] = useState(data.isEditMode ? true : false);

  const methods = useForm<FormValues>({
    defaultValues: {
      title_ru: data.title_ru,
      title_en: data.title_en,
      position: data.position,
      description_ru: data.description_ru,
      description_en: data.description_en,
      courseId: data.courseId,
      isOpen: data.isOpen,
    },
    mode: 'onTouched',
    resetOptions: {
      keepErrors: false,
    },
  });

  const onSubmitHandler: SubmitHandler<FormValues> = () => {
    setIsEdit(false);
    return null;
  };

  return (
    <div className={styles['wrapper']}>
      {isEdit ? (
        <div className={styles['wrapper__main']}>
          <FormProvider {...methods}>
            <form
              className={styles['wrapper__form']}
              onSubmit={methods.handleSubmit(onSubmitHandler)}
            >
              <TextController
                label='Название (ru)'
                required
                inputName='title_ru'
                placeholder='Введите название главы (ru)'
              />
              <TextController
                label='Название (en)'
                required
                inputName='title_en'
                placeholder='Введите название главы (en)'
              />
              <div className={styles['wrapper__field']}>
                <Text tag='span' size='m' weight='medium'>
                  Описание главы (ru)
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
                  Описание главы (en)
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
                  Вложения
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
              <div className={styles['wrapper__btns']}>
                <div></div>
                <Button type='submit' disabled={!methods.formState.isValid}>
                  Сохранить
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      ) : (
        <div className={styles['wrapper__preview']}>
          <Text tag='span' size='m' weight='medium'>
            {`Название главы ${data.position}`}
          </Text>
          <Image
            width='24px'
            height='24px'
            image='default'
            onClick={() => setIsEdit((prev) => !prev)}
          />
        </div>
      )}
    </div>
  );
};
