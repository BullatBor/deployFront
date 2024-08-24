import { FC, useState } from 'react';
import styles from './ChapterData.module.scss';
import { Text, TextController } from '@/shared';
import { Controller, useFormContext } from 'react-hook-form';
import cn from 'classnames';

interface Props {
  index: number;
  deleteHandler: (index: number) => void;
}
const arrayMock = Array.from({ length: 4 });

export const ChapterData: FC<Props> = ({ index, deleteHandler }) => {
  const { control, watch } = useFormContext();
  const [isHide, setHide] = useState(true);
  const hideHandler = () => {
    setHide((prev) => !prev);
  };
  const id = watch(`chapterData.${index}.id`);
  const removeHandler = () => {
    if (id) {
      deleteHandler(index);
      //TODO: delete endpoint
    } else deleteHandler(index);
  };
  return (
    <div>
      <div className={styles['header']}>
        <Text tag='p' size='s' weight='semibold'>
          {`Вопрос №${index + 1}`}
        </Text>
        <div onClick={hideHandler}>
          <Text tag='p' size='xs' weight='regular'>
            {isHide ? 'Раскрыть' : `Скрыть`}
          </Text>
        </div>
        <
      </div>
      <div className={cn(styles['form'], { [styles['hide']]: isHide })}>
        <div className={styles['inputs']}>
          <TextController
            required
            inputName={`chapterData.${index}.question_ru`}
            placeholder='Введите вопрос (ru)'
          />
          <TextController
            required
            inputName={`chapterData.${index}.question_en`}
            placeholder='Введите вопрос (en)'
          />
        </div>
        <Text tag='p' size='xs' weight='semibold'>
          Варианты ответов
        </Text>
        <div className={styles['variants']}>
          {arrayMock.map((_, indexAnswer) => (
            <div className={styles['variant']}>
              <Controller
                control={control}
                name={`chapterData.${index}.answers[${indexAnswer}].isCorrect`}
                render={({ field: { value, onChange } }) => (
                  <input type='checkbox' checked={value} onChange={onChange} />
                )}
              />
              <TextController
                required
                inputName={`chapterData.${index}.answers[${indexAnswer}].answer`}
                placeholder='первый вариант'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
