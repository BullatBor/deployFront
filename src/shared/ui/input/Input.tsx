import { FC } from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';
import { Icon } from '../icon';

interface INPUT_PROPS {
  value: string;
  onChange: (value: string) => void;
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'ml' | 'xss' | 'sxs' | 'sm' | 'lsm' | 'xxs';
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  placeholder?: string;
  width?: string;
  isClearable?: boolean;
  required?: boolean;
  type?: string;
  step?: string;
}

export const Input: FC<INPUT_PROPS> = (props) => {
  const {
    value,
    onChange,
    size = 's',
    weight = 'regular',
    placeholder,
    width = 'max',
    isClearable,
    required = false,
    type = 'text',
    step,
  } = props;

  const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const clearInput = () => {
    onChange('');
  };

  return (
    <div className={cn(styles['wrapper'])}>
      <input
        type={type}
        value={value}
        onChange={inputHandle}
        placeholder={placeholder}
        step={step}
        className={cn(
          styles[`wrapper_${size}`],
          styles[`wrapper_${weight}`],
          styles[`wrapper_${width}`],
        )}
        required={required}
      />
      {isClearable && (
        <Icon icon='clear' onClick={clearInput} className={styles['wrapper__clear']} />
      )}
    </div>
  );
};
