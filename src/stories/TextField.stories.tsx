import React from 'react';
import { Story, Meta } from '@storybook/react';

import TextField, { TextFieldProps } from '../components/TextField';

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

const defaultProps: TextFieldProps = {
  name: 'email',
  id: 'email',
  placeholder: 'example@gmail.com',
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const Error = Template.bind({});
Error.args = {
  ...defaultProps,
  value: 'example',
  error: 'Your email must use "@"',
};
