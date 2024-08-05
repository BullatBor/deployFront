import { FC, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import cn from 'classnames';
import styles from './FileLoader.module.scss';
import { Text } from '../text';

interface IFile extends File {
  preview: string;
}

interface PROPS {
  image: IFile | undefined;
  onChange: (value: File) => void;
}

export const FileLoader: FC<PROPS> = ({ image, onChange }) => {
  const onDrop = useCallback((acceptedFile: File[]) => {
    const courseImage = Object.assign(acceptedFile[0], {
      preview: URL.createObjectURL(acceptedFile[0]),
    });

    onChange(courseImage);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div className={styles['wrapper']}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div
          className={cn(styles['file_dropzone'], {
            [styles['file_dropzone__isDrag']]: isDragActive,
          })}
        >
          {isDragActive ? (
            <Text tag='span' size='s' weight='regular'>
              Перетащите изображение сюда
            </Text>
          ) : (
            <Text tag='span' size='s' weight='regular'>
              Нажмите чтобы загрузить, или перетащите изображение
            </Text>
          )}
        </div>
      </div>
      {image && (
        <div className={styles['preview']}>
          <div className={styles['preview__inner']}>
            <img
              src={image.preview}
              onLoad={() => {
                URL.revokeObjectURL(image.preview);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
