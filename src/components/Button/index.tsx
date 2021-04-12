import React, { ReactNode, VFC } from 'react';
import cn from 'classnames';

export type ButtonProps = Partial<JSX.IntrinsicElements['button']> & {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'button' | 'submit';
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
};

const Button: VFC<ButtonProps> = ({
  children,
  onClick,
  primary = false,
  size = 'medium',
  type = 'button',
}): JSX.Element => (
  <button
    type={type === 'button' ? 'button' : 'submit'}
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
        'border-transparent text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500': primary,
      },
      {
        'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500': !primary,
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
