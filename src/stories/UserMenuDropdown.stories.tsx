import React from 'react';
import { Story, Meta } from '@storybook/react';

import UserMenuDropdown, {
  UserMenuDropdownProps,
} from '../components/UserMenuDropdown';

export default {
  title: 'UserMenuDropdown',
  component: UserMenuDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const defaultArgs: UserMenuDropdownProps = {
  iconUrl:
    'https://avatars.githubusercontent.com/u/25237234?s=460&u=f0fa7ee73d6e6d562a175980de98f4a6e567da93&v=4',
  menuItems: [
    { content: 'Your Profile', onClick: () => '' },
    { content: 'Settings', onClick: () => '' },
    { content: 'Sign out', onClick: () => '' },
  ],
};

const Template: Story<UserMenuDropdownProps> = (args) => (
  <UserMenuDropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
