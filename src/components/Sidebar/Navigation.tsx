import { VFC } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import Icon from 'components/Icon';

type NavigationItemProps = {
  href: string;
  icon: JSX.Element;
  name: string;
};

// TODO: ロゴを動的に変更させる
const NavigationItem: VFC<NavigationItemProps> = ({ href, icon, name }) => (
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
      {icon}
      {name}
    </a>
  </Link>
);

// const NAVIGATION_LIST = ['dashboard', 'team', 'project'];
const NAVIGATION_LIST: NavigationItemProps[] = [
  { href: '/dashboard', icon: <Icon name="dashboard" />, name: 'Dashboard' },
  { href: '/team', icon: <Icon name="users" />, name: 'Team' },
  { href: '/project', icon: <Icon name="flag" />, name: 'Project' },
];

const SidebarNavigation: VFC = () => (
  <div className={cn('mt-5', 'flex-grow', 'flex', 'flex-col')}>
    <nav className={cn('flex-1', 'px-2', 'bg-white', 'space-y-1')}>
      {NAVIGATION_LIST.map((item) => (
        <NavigationItem
          key={item.name}
          icon={item.icon}
          href={`/${item.href}`}
          name={item.name}
        />
      ))}
    </nav>
  </div>
);

export default SidebarNavigation;
