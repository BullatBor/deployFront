import { FC, useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './AuthForm.module.scss';
import {
  Button,
  Input,
  IRequest,
  useAuthorizationMutation,
  useRegistrationMutation,
} from '@/shared';

interface IAuthType {
  type: 'registration' | 'authorization';
}

interface IForm {
  firstName: string;
  lastName: string;
  dateOfBirthday: string;
  email: string;
  password: string;
}

const AuthForm: FC<IAuthType> = ({ type }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [register] = useRegistrationMutation();
  const [auth] = useAuthorizationMutation();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const methods = useForm<IForm>({
    mode: 'onTouched',
    resetOptions: {
      keepErrors: true,
      keepDirtyValues: true,
    },
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirthday: '',
      email: '',
      password: '',
    },
  });

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = methods;

  const handleCheck = () => {
    if (inputRef.current !== null) {
      if (inputRef.current.type === 'password') {
        inputRef.current.type = 'text';
      } else if (inputRef.current.type === 'text') {
        inputRef.current.type = 'password';
      }
    }
  };

  const onSubmit: SubmitHandler<IRequest> = async (data) => {
    try {
      type === 'registration' ? register(data) : auth(data);
    } catch (e) {
      if (typeof e === 'string') {
        alert(e.toUpperCase());
      } else if (e instanceof Error) {
        alert(e.message);
      }
    }
  };

  return (
    <form className={styles['form']}>
      <main className={styles['form__content']}>
        <header className={styles['form__header']}>{t(`${type}.header`)}</header>
        <Controller
          control={control}
          name='email'
          rules={{
            required: 'Enter your email',
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Invalid email format',
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <div className={styles['form__block']}>
              <Input size={'s'} type='email' placeholder={t(`${type}.email`)} {...field} />
              {error && <div style={{ color: 'red' }}>{error.message}</div>}
            </div>
          )}
        />
        <Controller
          control={control}
          name='password'
          rules={{
            required: 'Enter your password',
            minLength: { value: 4, message: 'The password cannot be less than 4 characters' },
          }}
          render={({ field, fieldState: { error } }) => (
            <div className={styles['form__block']}>
              <Input
                size={'s'}
                refs={inputRef}
                type='password'
                placeholder={t(`${type}.password`)}
                {...field}
              />
              {error && <div style={{ color: 'red' }}>{error.message}</div>}
              <label htmlFor='check'>
                <input id='check' type='checkbox' onClick={handleCheck} />
                {'check password'}
              </label>
            </div>
          )}
        />
        <div className={styles['form__buttons']}>
          <Button disabled={!isValid} width='max' onClick={handleSubmit(onSubmit)}>
            {t(`${type}.submit`)}
          </Button>
        </div>
        <div className={styles['form__footer']}>
          <span
            onClick={() =>
              navigate(`/${type === 'registration' ? 'authorization' : 'registration'}`)
            }
          >
            {t(`${type}.redirect`)}
          </span>
          <span onClick={() => navigate('/main')}>{t(`${type}.without`)}</span>
        </div>
      </main>
    </form>
  );
};

export default AuthForm;
