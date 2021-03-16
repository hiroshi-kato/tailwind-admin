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

const Template: Story = () => <Sidebar />;

export const Default = Template.bind({});
Default.args = {};
