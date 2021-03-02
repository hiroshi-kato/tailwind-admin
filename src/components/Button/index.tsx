import React, { ReactNode, VFC } from 'react';
import cn from 'classnames';

type ButtonProps = {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'default';
};

const Button: VFC<ButtonProps> = ({
  children,
  onClick,
  size = 'medium',
  color = 'default',
}): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      'inline-flex',
      'items-center',
      'border',
      'shadow-sm',
      'font-medium',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      {
        'border-transparent text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500':
          color === 'primary',
      },
      {
        'border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500':
          color === 'secondary',
      },
      {
        'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500':
          color === 'default',
      },
      { 'px-2.5 py-1.5 text-xs rounded': size === 'small' },
      { 'px-4 py-2 text-sm rounded-md': size === 'medium' },
      { 'px-6 py-3 text-base rounded-md': size === 'large' },
    )}
  >
    {children}
  </button>
);
export default Button;
