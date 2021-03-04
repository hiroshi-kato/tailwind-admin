import { fireEvent, render, cleanup, screen } from 'test-utils';
import Button from './index';

afterEach(cleanup);

describe('Button', () => {
  const handleClick = jest.fn();
  describe('Button', () => {
    test('should be render button with label', () => {
      const firstLabel = 'button';
      const { rerender } = render(
        <Button onClick={handleClick}>{firstLabel}</Button>,
      );
      const button = screen.getByText(firstLabel);
      expect(button).toBeInTheDocument();

      const secondLabel = 'submit';
      rerender(<Button onClick={handleClick}>{secondLabel}</Button>);
      expect(screen.getByText(secondLabel)).toBeInTheDocument();
    });

    test('should be fired handleClick when button clicked', () => {
      render(<Button onClick={handleClick}>submit</Button>);
      const button = screen.getByText('submit');
      expect(handleClick).toHaveBeenCalledTimes(0);
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
