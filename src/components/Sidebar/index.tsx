import { VFC } from 'react';
import cn from 'classnames';

import Header from './Header';
import Navigation from './Navigation';

const Sidebar: VFC = () => (
  <aside aria-label="サイドバー" className={cn('flex', 'flex-col', 'w-64')}>
    <Header />
    <Navigation />
  </aside>
);

export default Sidebar;
