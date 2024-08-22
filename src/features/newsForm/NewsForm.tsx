import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './NewsForm.module.scss';
import {
  Button,
  ErrorMessage,
  Input,
  Text,
  INewsCreate,
  INewsUpdate,
  useCreateNewMutation,
  useDeleteNewMutation,
  useUpdateNewMutation,
} from '@/shared';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FC, useEffect } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';

interface IProps {
  isCreatedMode?: boolean;
}

export const NewsForm: FC<IProps> = ({ isCreatedMode = false }) => {
  const [deleteNew] = useDeleteNewMutation();
  const [updateNew] = useUpdateNewMutation();
  const [createNew] = useCreateNewMutation();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const methods = useForm<INewsCreate>({
    mode: 'onTouched',
    defaultValues: {
      date: '',
      title_ru: '',
      title_en: '',
      description_ru: '',
      description_en: '',
    },
    resetOptions: { keepDirtyValues: true, keepErrors: true },
  });

  const {
    formState: { isValid },
    handleSubmit,
    control,
    reset,
  } = methods;

  useEffect(() => reset({ ...location.state }), [location.state, reset]);

  const handleDelete = (news_id: number) => {
    deleteNew(news_id);
    navigate(-1);
  };

  const handleCreate = (info: INewsCreate) => {
    createNew(info);
    navigate(-1);
  };

  const handleUpdate = (info: INewsUpdate) => {
    updateNew(info);
    navigate(-1);
  };

  const onSubmit: SubmitHandler<INewsCreate | INewsUpdate> = (data) => {
    isCreatedMode ? handleCreate(data as INewsCreate) : handleUpdate(data as INewsUpdate);
  };

  return (
    <div className={styles['wrapper']}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['wrapper__form']}>
        <div className={styles['wrapper__field']}>
          <Text tag='span' size='m' weight='medium'>
            {'Дата публикации'}
          </Text>
          <Controller
            control={control}
            name='date'
            rules={{
              required: 'Поле обязательно для заполнения',
            }}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <Input
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder='Введите в формате: September 1, 2013'
                  size='s'
                  isClearable
                />
                <ErrorMessage error={error} />
              </>
            )}
          />
        </div>
        <div className={styles['wrapper__field']}>
          <Text tag='span' size='m' weight='medium'>
            {'Заголовок новости ( рус )'}
          </Text>
          <Controller
            control={control}
            name='title_ru'
            rules={{
              required: 'Поле обязательно для заполнения',
              minLength: { value: 4, message: 'Минимально количество символов - 4' },
            }}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <ReactTextareaAutosize value={value} onChange={onChange} onBlur={onBlur} rows={4} />
                <ErrorMessage error={error} />
              </>
            )}
          />
        </div>
        <div className={styles['wrapper__field']}>
          <Text tag='span' size='m' weight='medium'>
            {'Заголовок новости ( en )'}
          </Text>
          <Controller
            control={control}
            name='title_en'
            rules={{
              required: 'Поле обязательно для заполнения',
              minLength: { value: 4, message: 'Минимально количество символов - 4' },
            }}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <ReactTextareaAutosize value={value} onChange={onChange} onBlur={onBlur} rows={4} />
                <ErrorMessage error={error} />
              </>
            )}
          />
        </div>
        <div className={styles['wrapper__field']}>
          <Text tag='span' size='m' weight='medium'>
            {'Описание новости ( рус )'}
          </Text>
          <Controller
            control={control}
            name='description_ru'
            rules={{
              required: 'Поле обязательно для заполнения',
              minLength: { value: 4, message: 'Минимально количество символов - 4' },
            }}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <ReactTextareaAutosize value={value} onChange={onChange} onBlur={onBlur} rows={4} />
                <ErrorMessage error={error} />
              </>
            )}
          />
        </div>
        <div className={styles['wrapper__field']}>
          <Text tag='span' size='m' weight='medium'>
            {'Описание новости ( en )'}
          </Text>
          <Controller
            control={control}
            name='description_en'
            rules={{
              required: 'Поле обязательно для заполнения',
              minLength: { value: 4, message: 'Минимально количество символов - 4' },
            }}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <ReactTextareaAutosize value={value} onChange={onChange} onBlur={onBlur} rows={4} />
                <ErrorMessage error={error} />
              </>
            )}
          />
        </div>
        <div className={styles['wrapper__buttons']}>
          <Button onClick={() => navigate(-1)}>{'Назад'}</Button>
          <div className={styles['wrapper__rightButtons']}>
            {isCreatedMode ? (
              <Button disabled={!isValid} type='submit'>
                {'Создать'}
              </Button>
            ) : (
              <>
                <Button theme='red' onClick={() => handleDelete(+(id as string))}>
                  {'Удалить'}
                </Button>
                <Button disabled={!isValid} type='submit'>
                  {'Обновить'}
                </Button>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
