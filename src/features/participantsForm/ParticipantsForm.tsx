import { FormProvider, useForm, useFieldArray } from 'react-hook-form';
import styles from './ParticipantsForm.module.scss';
import { Text, Input, Button, useDebounce, IParticipant } from '@/shared';
import { FC } from 'react';
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
  const methods = useForm<FormValues>({
    defaultValues: {
      participants: [
        {
          courseId: 'sdfsdfsdf',
          userId: 'sdfsdfsdf',
          email: 'sdfsdfsdf.gmail.com',
        },
      ],
    },
    mode: 'onTouched',
    resetOptions: {
      keepErrors: false,
    },
  });

  const { control } = methods;

  const { fields, append, remove } = useFieldArray({
    name: 'participants',
    control,
  });

  const chipterHandler = (index: number, userId: string) => {
    remove(index);
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
  } = useDebounce(courseId);

  const onSubmitHandler = () => {};

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
                  <Suggest data={currentData} suggestRef={suggestRef} addParticipant={append} />
                )}
              </div>
            </div>
            <div>
              {fields.map((item, index) => (
                <Chipter
                  key={item.userId}
                  {...item}
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
