import { Button, Text, IChapterFormValues } from '@/shared';
import styles from './Chapters.module.scss';
import { FC, useCallback, useState } from 'react';
import { ChapterForm } from '../chapterForm';

interface IChapters {
  chaptersData: IChapterFormValues[];
}

export const Chapters: FC<IChapters> = ({ chaptersData }) => {
  const [chapters, setChapters] = useState<IChapterFormValues[]>(chaptersData);
  const [isEditPosition, setIsEditPosition] = useState<boolean>(false);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  const setBlocked = useCallback((isBLocked: boolean) => {
    setIsBlocked(isBLocked);
  }, []);

  const moveUp = useCallback(
    (index: number) => {
      if (index === 0) return;

      const newItems = [...chapters];
      [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
      setChapters(newItems);
    },
    [chapters],
  );

  const moveDown = useCallback(
    (index: number) => {
      if (index === chapters.length - 1) return;
      const newItems = [...chapters];
      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
      setChapters(newItems);
    },
    [chapters],
  );

  const addChapter = () => {
    setBlocked(true);
    setChapters((prev) => [
      ...prev,
      {
        id: null,
        isOpen: true,
        title_ru: 'Нужно отредактировать',
        courseId: '12',
        position: chapters.length,
        setBlocked,
        isEditMode: true,
      },
    ]);
  };

  const changePosition = () => {
    if (isEditPosition) {
      // TODO: API
      setIsEditPosition(false);
    } else {
      setIsEditPosition(true);
    }
  };

  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper__main']}>
        <Text tag='span' size='l' weight='medium'>
          Главы
        </Text>
        <div className={styles['wrapper__chapters']}>
          {chapters.length > 1 && (
            <Button
              size='xs'
              theme={isEditPosition ? 'success' : 'primary'}
              width='content'
              onClick={changePosition}
              disabled={isBlocked}
            >
              {isEditPosition ? 'Сохранить' : 'Изменить порядок'}
            </Button>
          )}

          {chapters.length > 0
            ? chapters.map((chapter, index) => {
                return (
                  <div className={styles['wrapper__chapter']} key={chapter.id}>
                    <ChapterForm
                      key={chapter.id}
                      isEditPosition={isEditPosition}
                      {...chapter}
                      index={index}
                      isBlocked={isBlocked}
                      moveUp={() => moveUp(index)}
                      moveDown={() => moveDown(index)}
                      setBlocked={setBlocked}
                    />
                  </div>
                );
              })
            : 'Глав нет'}
        </div>

        <Button disabled={isBlocked} onClick={() => addChapter()}>
          Добавить
        </Button>
      </div>
    </div>
  );
};
