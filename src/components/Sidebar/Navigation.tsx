import { VFC } from 'react';
import cn from 'classnames';
import Link from 'next/link';

type NavigationItemProps = {
  href: string;
  name: string;
};

// TODO: ロゴを動的に変更させる
const NavigationItem: VFC<NavigationItemProps> = ({ href, name }) => (
  <Link href={href}>
    <a
      className={cn(
        'text-gray-600',
        'hover:bg-gray-50',
        'hover:text-gray-900',
        'group',
        'flex',
        'items-center',
        'px-2',
        'py-2',
        'text-sm',
        'font-medium',
        'rounded-md',
      )}
    >
      <svg
        className={cn(
          'text-gray-400',
          'group-hover:text-gray-500',
          'mr-3',
          'h-6',
          'w-6',
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      {name}
    </a>
  </Link>
);

const NAVIGATION_LIST = ['dashboard', 'team', 'project'];

const toInitialUpperCase = (text: string) =>
  `${text[0].toUpperCase()}${text.slice(1)}`;

const SidebarNavigation: VFC = () => (
  <div className={cn('mt-5', 'flex-grow', 'flex', 'flex-col')}>
    <nav className={cn('flex-1', 'px-2', 'bg-white', 'space-y-1')}>
      {NAVIGATION_LIST.map((item) => (
        <NavigationItem
          key={item}
          href={`/${item}`}
          name={toInitialUpperCase(item)}
        />
      ))}
    </nav>
  </div>
);

export default SidebarNavigation;
