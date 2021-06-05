import { useForm } from 'react-hook-form';
import { VFC } from 'react';

import { screen, render, cleanup } from 'test-utils';
import TextField, { TextFieldProps } from './index';

afterEach(cleanup);

describe('TextField', () => {
  const MockTextField: VFC = () => {
    const {
      register,
      formState: { errors },
    } = useForm();
    const defaultProps: TextFieldProps = {
      label: 'email',
      register,
      isError: !!errors,
    };

    return <TextField {...defaultProps} />;
  };

  test('should render ', () => {
    render(<MockTextField />);
    const textField = screen.getByRole('textbox');
    expect(textField).toBeInTheDocument();
  });
});
