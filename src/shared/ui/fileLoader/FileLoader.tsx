import { FC } from 'react';
import { useDropzone } from 'react-dropzone';
import cn from 'classnames';
import styles from './FileLoader.module.scss';
import { Text } from '../text';
import { Icon } from '../icon';

interface IFile extends File {
  preview: string;
}

interface PROPS {
  image: IFile | IFile[] | undefined;
  onChange: (value: File | IFile[] | undefined) => void;
  type: 'img' | 'files';
  acceptedFileTypes?: {
    [key: string]: string[];
  };
}

export const FileLoader: FC<PROPS> = ({ image, onChange, type = 'files', acceptedFileTypes }) => {
  const onDrop = (acceptedFile: File[]) => {
    let files: IFile | IFile[] | undefined;
    if (type === 'img') {
      files = Object.assign(acceptedFile[0], {
        preview: URL.createObjectURL(acceptedFile[0]),
      });
      onChange(files);
    } else {
      files = Object.assign(acceptedFile[0], {
        preview: URL.createObjectURL(acceptedFile[0]),
      });
      if (Array.isArray(image)) {
        onChange([...image, files]);
      } else {
        onChange([files]);
      }
    }
  };

  const deleteFile = (name: string) => {
    if (Array.isArray(image)) {
      onChange(image.filter((item) => item.name !== name));
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: acceptedFileTypes,
  });

  const isImageType = type === 'img' && !Array.isArray(image) && image;
  return (
    <div className={cn(styles['wrapper'], { [styles['wrapper__filesType']]: type === 'files' })}>
      <div {...getRootProps()} className={type === 'files' ? styles['wrapper__inner'] : ''}>
        <input {...getInputProps()} />
        {type === 'img' ? (
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
        ) : (
          <Icon width='24px' height='24px' icon='attachment' />
        )}
      </div>
      {isImageType ? (
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
      ) : (
        Array.isArray(image) && (
          <div className={styles['wrapper__filesList']}>
            {image.map((item) => (
              <div className={styles['wrapper__listItem']} key={item.name}>
                <Text tag='span' size='xs' weight='regular'>
                  {item.name}
                </Text>
                <div className={styles['wrapper__delete']} onClick={() => deleteFile(item.name)}>
                  <Icon width='14px' height='14px' icon='delete' />
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};
