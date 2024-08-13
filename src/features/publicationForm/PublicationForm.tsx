import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './PublicationForm.module.scss';
import {
  Button,
  ErrorMessage,
  Input,
  IPublicationCreate,
  IPublicationUpdate,
  Text,
} from '@/shared';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FC, useEffect } from 'react';
import {
  useCreatePublicationMutation,
  useDeletePublicationMutation,
  useUpdatePublicationMutation,
} from '@/shared/api/publicationsApi';

interface IProps {
  isCreatedMode: boolean;
}

export const PublicationForm: FC<IProps> = ({ isCreatedMode = false }) => {
  const [deletePublication] = useDeletePublicationMutation();
  const [updatePublication] = useUpdatePublicationMutation();
  const [createPublication] = useCreatePublicationMutation();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const methods = useForm<IPublicationCreate>({
    mode: 'onTouched',
    defaultValues: {
      name: '',
      authors: '',
      addition: '',
      link: '',
      year: new Date().getFullYear(),
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

  const handleDelete = (publication_id: number) => {
    deletePublication(publication_id);
    navigate(-1);
  };

  const handleCreate = (info: IPublicationCreate) => {
    createPublication(info);
    navigate(-1);
  };

  const handleUpdate = (info: IPublicationUpdate) => {
    updatePublication(info);
    navigate(-1);
  };

  const onSubmit: SubmitHandler<IPublicationCreate | IPublicationUpdate> = (data) => {
    isCreatedMode
      ? handleCreate(data as IPublicationCreate)
      : handleUpdate(data as IPublicationUpdate);
  };

  return (
    <div className={styles['wrapper']}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['wrapper__form']}>
        <div className={styles['wrapper__field']}>
          <Text tag='span' size='m' weight='medium'>
            {'Год публикации'}
          </Text>
          <Controller
            control={control}
            name='year'
            rules={{
              required: 'Поле обязательно для заполнения',
              validate: (value: number) => {
                if (value > new Date().getFullYear())
                  return 'Значение не может быть больше текущего года';
                if (value < 2008) return 'Значение не может быть меньше 2008';
              },
            }}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <Input
                  type='number'
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder='Введите год публикации'
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
            {'Название публикации'}
          </Text>
          <Controller
            control={control}
            name='name'
            rules={{
              required: 'Поле обязательно для заполнения',
              minLength: { value: 4, message: 'Минимально количество символов - 4' },
            }}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <Input
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder='Введите название публикации'
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
            {'Авторы'}
          </Text>
          <Controller
            control={control}
            name='authors'
            rules={{
              required: 'Поле обязательно для заполнения',
              minLength: { value: 4, message: 'Минимально количество символов - 4' },
            }}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <Input
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder='Укажите авторов'
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
            {'Код статьи'}
          </Text>
          <Controller
            control={control}
            name='addition'
            rules={{
              required: 'Поле обязательно для заполнения',
              minLength: { value: 4, message: 'Минимально количество символов - 4' },
            }}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <Input
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder='Введите код статьи'
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
            {'Ссылка'}
          </Text>
          <Controller
            control={control}
            name='link'
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <Input
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder='Укажите ссылку на статью'
                  size='s'
                  isClearable
                />
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
