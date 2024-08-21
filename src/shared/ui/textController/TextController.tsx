import { Input, Text } from '@/shared';
import styles from './TextController.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { FC } from 'react';

interface PROPS {
  label: string;
  inputName: string;
  required: boolean;
  placeholder: string;
}

export const TextController: FC<PROPS> = ({ label, inputName, required = true, placeholder }) => {
  const { control } = useFormContext();
  return (
    <div className={styles['field']}>
      <Text tag='span' size='m' weight='medium'>
        {label}
      </Text>
      <Controller
        control={control}
        name={inputName}
        rules={{ required }}
        render={({ field: { onChange, value, onBlur } }) => (
          <>
            <Input
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              size='s'
              isClearable
            />
          </>
        )}
      />
    </div>
  );
};
