import React from 'react';
import { Story, Meta } from '@storybook/react';

import Sidebar from '../components/Sidebar';

export default {
  title: 'Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const defaultArgs = {
  children: 'submit',
  primary: false,
  size: 'medium' as const,
};

// const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const Template: Story = () => <Sidebar />;

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};
