import { FormProvider, useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import styles from './ParticipantsForm.module.scss';
import {
  Text,
  Input,
  Button,
  useDebounce,
  IParticipant,
  useGetParticipantsQuery,
  useAddParticipantsMutation,
  useBlockedUsersMutation,
} from '@/shared';
import { FC, useEffect } from 'react';
import { Suggest } from '../Suggest';
import cn from 'classnames';
import { Chipter } from '../Chipter';

interface PROPS {
  courseId: string;
}

interface FormValues {
  participants: IParticipant[];
}

export const ParticipantsForm: FC<PROPS> = ({ courseId }) => {
  const { data } = useGetParticipantsQuery({ courseId });
  const [addParticipants] = useAddParticipantsMutation();
  const [blockedUsers] = useBlockedUsersMutation();
  const methods = useForm<FormValues>({
    defaultValues: {
      participants: data,
    },
    mode: 'onTouched',
    resetOptions: {
      keepErrors: false,
    },
  });

  const { control, reset } = methods;

  useEffect(() => {
    if (data) reset({ participants: data });
  }, [data, reset]);

  const { fields, append, remove } = useFieldArray({
    name: 'participants',
    control,
  });

  const chipterHandler = (index: number, userId: string) => {
    remove(index);
    blockedUsers({ userId, courseId });
    //TODO API
  };

  const {
    inputRef,
    text,
    handleInputChange,
    isSuggestVisible,
    currentData,
    suggestRef,
    onSearchFocus,
  } = useDebounce();

  const onSubmitHandler: SubmitHandler<FormValues> = (data) => {
    addParticipants(data);
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
              Доступ
            </Text>
            <div className={cn(styles['wrapper__field'], styles['withSuggets'])}>
              <Input
                refs={inputRef}
                value={text}
                onFocus={onSearchFocus}
                onChange={handleInputChange}
                placeholder='Введите почту для поиска'
                size='s'
                isClearable
              />
              <div className={styles['suggest']}>
                {isSuggestVisible && (
                  <Suggest
                    data={currentData}
                    courseId={courseId}
                    suggestRef={suggestRef}
                    addParticipant={append}
                  />
                )}
              </div>
            </div>
            <div className={styles['chipters']}>
              {fields.map((item, index) => (
                <Chipter
                  key={item.userId}
                  {...item}
                  id={item.userId}
                  index={index}
                  deleteParticipant={chipterHandler}
                />
              ))}
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
