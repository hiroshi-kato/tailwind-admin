import { VFC } from 'react';

import Header from './Header';
import Navigation from './Navigation';

const Sidebar: VFC = () => (
  <aside aria-label="サイドバー" className="w-64">
    <Header />
    <Navigation />
  </aside>
);

export default Sidebar;
