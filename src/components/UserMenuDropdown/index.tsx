import { VFC } from 'react';
import { Menu, Transition } from '@headlessui/react';
import cn from 'classnames';

type MenuItem = {
  content: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type UserMenuDropdownProps = {
  iconUrl: string;
  menuItems: MenuItem[];
};

const UserMenuDropdown: VFC<UserMenuDropdownProps> = ({
  iconUrl,
  menuItems,
}) => (
  <Menu>
    {({ open }) => (
      <>
        <Menu.Button>
          <span className="sr-only">ユーザーメニューを開く</span>
          <img
            className={cn('h-10', 'w-10', 'rounded-full', 'shadow-xl')}
            src={iconUrl}
            alt=""
          />
        </Menu.Button>
        <Transition
          show={open}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items
            static
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="ユーザーメニュー"
            className={cn(
              'rounded-md',
              'mt-2',
              'w-48',
              'shadow-lg',
              'bg-white',
              'ring-1',
              'ring-black',
              'ring-opacity-5',
              'p-1',
              'focus:outline-none',
            )}
          >
            {menuItems.map((menuItem) => (
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    role="menuitem"
                    className={cn('w-full', 'text-left')}
                    onClick={menuItem.onClick}
                  >
                    <div
                      className={cn(
                        'py-2',
                        'px-4',
                        'text-sm',
                        'text-gray-700',
                        {
                          'bg-gray-100': active,
                        },
                      )}
                    >
                      {menuItem.content}
                    </div>
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </>
    )}
  </Menu>
);

export default UserMenuDropdown;
