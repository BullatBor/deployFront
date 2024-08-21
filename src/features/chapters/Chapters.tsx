import { Button, Text } from '@/shared';
import styles from './Chapters.module.scss';
import { FC, useState } from 'react';
import { ChapterForm } from '../chapterForm';

interface FormValues {}

export const Chapters: FC<FormValues> = () => {
  const [chapters, setChapters] = useState<React.ReactNode[]>([]);
  const [isEditPosition, setIsEditPosition] = useState<boolean>(false);

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
  const addChapter = () => {
    setChapters((prev) => [
      ...prev,
      <ChapterForm
        isEditMode={false}
        position={chapters.length}
        courseId='1'
        isOpen
        key={`chapterForm${chapters.length}`}
      />,
    ]);
  };

  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper__main']}>
        <Text tag='span' size='l' weight='medium'>
          Главы
        </Text>
        <div className={styles['wrapper__chapters']}>
          {chapters.length > 0 && (
            <Button
              size='xs'
              theme={isEditPosition ? 'success' : 'primary'}
              width='content'
              onClick={() => setIsEditPosition((prev) => !prev)}
            >
              {isEditPosition ? 'Сохранить' : 'Изменить порядок'}
            </Button>
          )}

          {chapters.length > 0
            ? chapters.map((chapter, index) => {
                return (
                  <div className={styles['wrapper__chapter']}>
                    {chapter}
                    {isEditPosition && (
                      <div>
                        <div onClick={() => moveUp(index)}>Up</div>
                        <div onClick={() => moveDown(index)}>Down</div>
                      </div>
                    )}
                  </div>
                );
              })
            : 'Глав нет'}
        </div>
        <Button onClick={() => addChapter()}>Добавить</Button>
      </div>
    </div>
  );
};
