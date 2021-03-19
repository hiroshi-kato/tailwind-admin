import { screen, render, cleanup } from 'test-utils';

import TextField, { TextFieldProps } from './index';

afterEach(cleanup);

describe('TextField', () => {
  const defaultProps: TextFieldProps = {
    name: 'email',
    id: 'email',
    placeholder: 'example@gmail.com',
  };
  test('should render ', () => {
    render(<TextField {...defaultProps} />);
    const textField = screen.getByRole('textbox');
    expect(textField).toBeInTheDocument();
  });
});
