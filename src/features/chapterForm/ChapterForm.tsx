import {
  Button,
  FileLoader,
  IChapterFormProps,
  IChapterFormValues,
  Image,
  Text,
  TextController,
} from '@/shared';
import styles from './ChapterForm.module.scss';
import { FC, memo, useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useForm, Controller, SubmitHandler, FormProvider } from 'react-hook-form';
import cn from 'classnames';

const Form: FC<IChapterFormProps> = ({ setBlocked, isBlocked, ...data }) => {
  const [isEdit, setIsEdit] = useState(data.isEditMode ? true : false);

  const methods = useForm<IChapterFormValues>({
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

  const { watch } = methods;

  const title = watch('title_ru');

  const onSubmitHandler: SubmitHandler<IChapterFormValues> = () => {
    setIsEdit(false);
    setBlocked(false);
    return null;
  };

  const changeEditMode = () => {
    if (!isBlocked) {
      setIsEdit(true);
      setBlocked(true);
    }
  };

  return (
    <div className={cn(styles['wrapper'], { [styles['activeForm']]: isEdit })}>
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
                required={false}
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
                  rules={{ required: false }}
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
                  name='attachments'
                  rules={{ required: false }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <FileLoader image={value} onChange={onChange} type='files' />
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
            {title}
          </Text>

          <Image width='24px' height='24px' image='default' onClick={changeEditMode} />
        </div>
      )}
    </div>
  );
};

export const ChapterForm = memo(Form);
