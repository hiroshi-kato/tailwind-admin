import { VFC } from 'react';
import cn from 'classnames';
import { Menu } from '@headlessui/react';

export type MenuItemProps = {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const MenuItem: VFC<MenuItemProps> = ({ content, onClick }) => (
  <Menu.Item>
    {({ active }) => (
      <button
        type="button"
        role="menuitem"
        className={cn('w-full', 'text-left')}
        onClick={onClick}
      >
        <div
          className={cn('py-2', 'px-4', 'text-sm', 'text-gray-700', {
            'bg-gray-100': active,
          })}
        >
          {content}
        </div>
      </button>
    )}
  </Menu.Item>
);

export default MenuItem;
