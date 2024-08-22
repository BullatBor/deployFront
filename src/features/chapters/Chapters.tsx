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

  const moveUp = (index: number) => {
    if (index === 0) return;

    const newItems = [...chapters];
    [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];
    setChapters(newItems);
  };

  const moveDown = (index: number) => {
    if (index === chapters.length - 1) return;
    const newItems = [...chapters];
    [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    setChapters(newItems);
  };

  const deleteForm = (indexForm: number) => {
    const newForms = chapters.filter((_item, index) => index !== indexForm);
    setChapters(newForms);
  };

  const addChapter = () => {
    setIsBlocked(true);
    setChapters((prev) => [
      ...prev,
      {
        id: String(new Date().getTime()),
        isOpen: true,
        title_ru: 'Новый чаптер',
        courseId: '12',
        position: chapters.length,
        setBlocked,
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
                  <div className={styles['wrapper__chapter']}>
                    <ChapterForm
                      setBlocked={setBlocked}
                      isEditPosition={isEditPosition}
                      key={chapter.id}
                      {...chapter}
                      isBlocked={isBlocked}
                    />
                    {isEditPosition && (
                      <div>
                        <div onClick={() => moveUp(index)}>Up</div>
                        <div onClick={() => moveDown(index)}>Down</div>
                        <div onClick={() => deleteForm(index)}>Delete</div>
                      </div>
                    )}
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
