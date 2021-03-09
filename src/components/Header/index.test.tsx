import { render, cleanup, screen } from 'test-utils';
import Header from './index';

afterEach(cleanup);

describe('Header', () => {
  test('should render', () => {
    render(<Header />);

    const header = screen.getByRole('heading', { level: 1 });
    expect(header).toBeInTheDocument();
  });
});
