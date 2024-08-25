import { FC, useState } from 'react';
import styles from './ChapterData.module.scss';
import { FileLoader, Icon, Switcher, Text, TextController } from '@/shared';
import { Controller, useFormContext } from 'react-hook-form';
import cn from 'classnames';

interface Props {
  index: number;
  deleteHandler: (index: number, id?: string) => void;
}
const arrayMock = Array.from({ length: 4 });

export const ChapterData: FC<Props> = ({ index, deleteHandler }) => {
  const { control, watch, setValue } = useFormContext();
  const [isHide, setHide] = useState(true);
  const typeData = watch(`chapterData.${index}.type`);
  const [type, setType] = useState<1 | 2>(typeData === 'img' ? 2 : 1);
  const hideHandler = () => {
    setHide((prev) => !prev);
  };
  const id = watch(`chapterData.${index}.id`);

  const removeHandler = () => {
    deleteHandler(index, id);
  };

  const typeHandler = (stateName: string) => {
    if (type === 1) {
      setType(2);
      setValue(stateName, 'img');
    } else {
      setType(1);
      setValue(stateName, 'text');
    }
  };

  return (
    <div>
      <div className={styles['header']}>
        <Text tag='p' size='s' weight='semibold'>
          {`Вопрос №${index + 1}`}
        </Text>
        <div className={styles['btns']}>
          <div onClick={hideHandler} className={cn(styles['pointer'], styles['underline'])}>
            <Text tag='p' size='xs' weight='regular'>
              {isHide ? 'Раскрыть' : `Скрыть`}
            </Text>
          </div>
          <Icon
            width='16px'
            height='16px'
            icon='delete'
            className={styles['pointer']}
            onClick={removeHandler}
          />
        </div>
      </div>
      <div className={cn(styles['form'], { [styles['hide']]: isHide })}>
        <div className={styles['inputs']}>
          <TextController
            required
            inputName={`chapterData.${index}.question_ru`}
            placeholder='Введите вопрос (ru)'
          />
          <TextController
            required={false}
            inputName={`chapterData.${index}.question_en`}
            placeholder='Введите вопрос (en)'
          />
        </div>
        <Text tag='span' size='xs' weight='semibold'>
          Варианты ответов
        </Text>
        <Switcher
          value={type}
          onChange={() => typeHandler(`chapterData.${index}.type`)}
          leftLabel='Текст'
          rightLabel='Картинки'
          size='xs'
        />
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
              {type === 1 ? (
                <div className={styles['variant_inputs']}>
                  <TextController
                    required
                    inputName={`chapterData.${index}.answers[${indexAnswer}].answer_ru`}
                    placeholder='первый вариант (ru)'
                  />
                  <TextController
                    required={false}
                    inputName={`chapterData.${index}.answers[${indexAnswer}].answer_en`}
                    placeholder='первый вариант (en)'
                  />
                </div>
              ) : (
                <Controller
                  name={`chapterData.${index}.answers[${indexAnswer}].img`}
                  rules={{ required: false }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <FileLoader image={value} onChange={onChange} type='files' />
                    </>
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
