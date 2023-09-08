import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

interface Props {
  size?: 'sm' | 'lg';
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  buttonContent?: React.ReactNode;
  buttonProps?: Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'className'
  >;
  className?: string;
}

const Input: React.FC<
  Props & Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'size'>
> = ({
  size = 'sm',
  value,
  onChange,
  placeholder,
  buttonContent,
  buttonProps,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'bg-white/10 text-white flex items-center gap-5 max-[1365px]:gap-[10px]',
        className,
        {
          ['max-[1365px]:h-[40px] rounded-[35px] h-12 text-sm p-[10px_10px_10px_20px] max-[1365px]:p-[5px_5px_5px_15px] font-medium']:
            size === 'sm',
          ['rounded-lg h-15 text-15 p-[10px_10px_10px_25px] max-[767px]:h-[50px]']:
            size === 'lg',
        }
      )}
    >
      <input
        className={cn(
          'bg-transparent outline-none flex-1 placeholder:text-blue-4 max-[1365] max-w-[calc(100%_-_38px)]'
        )}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        {...rest}
      />

      {buttonContent && (
        <button
          className={cn(
            'w-10 h-10 rounded-full flex items-center justify-center',
            {
              ['h-10 w-10 bg-white/10']: size === 'lg',
              ['h-7 w-7 bg-accent-green']: size === 'sm',
            }
          )}
          {...buttonProps}
        >
          {buttonContent}
        </button>
      )}
    </div>
  );
};

export default Input;
