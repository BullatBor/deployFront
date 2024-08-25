import {
  Button,
  FileLoader,
  IChapterFormProps,
  IChapterFormValues,
  Text,
  TextController,
  Icon,
  Switcher,
  useCreateChapterMutation,
  useDeleteAttachmentMutation,
} from '@/shared';
import styles from './ChapterForm.module.scss';
import { FC, memo, useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useForm, Controller, SubmitHandler, FormProvider, useFieldArray } from 'react-hook-form';
import cn from 'classnames';
import { ChapterData } from '../chapterData';
import { CHAPTER_DATA_MOCK, DocFileType } from './constant';

const Form: FC<IChapterFormProps> = (props) => {
  const { setBlocked, isBlocked, isEditPosition, moveUp, moveDown, index, id, ...data } = props;

  const [isEdit, setIsEdit] = useState(data.isEditMode ? true : false);

  const [dataMode, setDataMode] = useState<1 | 2>(data.type);

  const methods = useForm<IChapterFormValues>({
    defaultValues: {
      title_ru: data.title_ru,
      title_en: data.title_en,
      position: data.position,
      description_ru: data.description_ru,
      description_en: data.description_en,
      courseId: data.courseId,
      type: data.type,
      isOpen: data.isOpen,
      chapterData: data.chapterData,
      attachments: data.attachments,
    },
    mode: 'onTouched',
    resetOptions: {
      keepErrors: false,
    },
  });

  const { control, watch, setValue } = methods;
  const [createChapter] = useCreateChapterMutation();
  const [deleteAttachment] = useDeleteAttachmentMutation();

  const { fields, append, remove } = useFieldArray({
    name: 'chapterData',
    control,
  });

  const attachments = watch('attachments');

  const onSubmitHandler: SubmitHandler<IChapterFormValues> = (data) => {
    const formData = new FormData();
    formData.append('courseId', data.courseId);
    formData.append('title_ru', data.title_ru);
    formData.append('title_en', data.title_en);
    formData.append('description_ru', data.description_ru);
    formData.append('description_en', data.description_en);
    formData.append('isOpen', data.isOpen ? 'true' : 'false');
    formData.append('position', String(data.position));
    formData.append('type', String(dataMode));
    if (data.chapterData && dataMode === 2) {
      data.chapterData.forEach((item) => {
        const newData = JSON.stringify(item);
        formData.append('data', newData);
      });
    }
    if (data.files && dataMode === 1) {
      formData.append('files', data.files);
    }

    createChapter(formData);
    closeFrom();
    return null;
  };

  const typeHandler = () => {
    if (dataMode === 1) {
      setDataMode(2);
    } else {
      setDataMode(1);
    }
  };

  const closeFrom = () => {
    setIsEdit(false);
    setBlocked(false);
  };

  const openForm = () => {
    if (!isBlocked) {
      setIsEdit(true);
      setBlocked(true);
    }
  };

  const deleteForm = () => {};

  const removeAttachment = () => {
    if (attachments && attachments[0].id) {
      deleteAttachment(attachments[0].id);
      setValue('attachments', undefined);
    } else {
      setValue('attachments', undefined);
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
              <div className={styles['wrapper__closeForm']}>
                <Button size='xs' theme={'red'} width='content' onClick={closeFrom} disabled={!id}>
                  Закрыть
                </Button>
              </div>
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
              <Switcher
                value={dataMode}
                onChange={typeHandler}
                leftLabel='Материалы'
                rightLabel='Вопросы'
              />

              {dataMode === 1 ? (
                <div className={styles['wrapper__field']}>
                  <Text tag='span' size='m' weight='medium'>
                    Вложения
                  </Text>
                  <div className={styles['wrapper__filesLoad']}>
                    <Controller
                      name='files'
                      rules={{ required: false }}
                      render={({ field: { onChange, value } }) => (
                        <>
                          <FileLoader
                            image={value}
                            onChange={onChange}
                            type='files'
                            acceptedFileTypes={DocFileType}
                          />
                        </>
                      )}
                    />
                    <div className={styles['wrapper__files']}>
                      {attachments && (
                        <div className={styles['wrapper__listItem']} key={attachments[0].name}>
                          <Text tag='span' size='xs' weight='regular'>
                            {attachments[0].name}
                          </Text>
                          <div className={styles['wrapper__delete']} onClick={removeAttachment}>
                            <Icon width='14px' height='14px' icon='delete' />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles['wrapper__field']}>
                  <Text tag='span' size='m' weight='medium'>
                    Вопросы
                  </Text>
                  {fields.map((item, index) => (
                    <ChapterData key={item.id} index={index} deleteHandler={remove} />
                  ))}
                  <Button
                    className={styles['wrapper__addBtn']}
                    type='submit'
                    onClick={() => append(CHAPTER_DATA_MOCK)}
                  >
                    Добавить
                  </Button>
                </div>
              )}

              <div className={styles['wrapper__btns']}>
                <div></div>
                <Button type='submit' disabled={!methods.formState.isValid}>
                  {id ? 'Обновить' : 'Сохранить'}
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      ) : (
        <div className={styles['wrapper__preview']}>
          <Text tag='span' size='m' weight='medium'>
            {data.title_ru}
          </Text>
          {isEditPosition ? (
            <div className={styles['wrapper__buttons']}>
              <div className={styles['wrapper__moveBtns']}>
                <Button
                  size='xs'
                  width='content'
                  onClick={() => moveUp(index)}
                  disabled={isBlocked}
                >
                  Вверх
                </Button>
                <Button
                  size='xs'
                  width='content'
                  onClick={() => moveDown(index)}
                  disabled={isBlocked}
                >
                  Вниз
                </Button>
              </div>
              <Icon
                width='24px'
                height='24px'
                icon='delete'
                className={styles['wrapper__delete']}
                onClick={() => deleteForm()}
              />
            </div>
          ) : (
            <div onClick={openForm}>
              <Text tag='span' size='s' weight='regular' className={styles['wrapper__editTitle']}>
                Редактировать
              </Text>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const ChapterForm = memo(Form);
