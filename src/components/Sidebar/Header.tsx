import { VFC } from 'react';
import cn from 'classnames';

const Logo: VFC = () => (
  <img
    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
    alt="Workflow"
    className={cn('h-8', 'w-auto')}
  />
);

const SidebarHeader: VFC = () => (
  <div
    role="banner"
    className={cn('flex', 'items-center', 'flex-shrink-0', 'px-4')}
  >
    <Logo />
  </div>
);

export default SidebarHeader;
