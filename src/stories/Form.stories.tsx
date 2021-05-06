import React from 'react';
import { Story, Meta } from '@storybook/react';

import {DatePicker} from '../components/Form/DatePicker';

export default {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = () => <DatePicker  />;

export const Default = Template.bind({});
