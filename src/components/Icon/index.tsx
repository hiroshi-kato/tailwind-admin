import { VFC } from 'react';
import cn from 'classnames';

import ICON_LIST from './const';

export type IconProps = {
  name: keyof typeof ICON_LIST;
};

const Icon: VFC<IconProps> = ({ name }) => (
  <div
    aria-label={`${name} icon`}
    className={cn(
      'text-gray-400',
      'group-hover:text-gray-500',
      'mr-3',
      'h-6',
      'w-6',
    )}
  >
    {ICON_LIST[name]}
  </div>
);

export default Icon;
