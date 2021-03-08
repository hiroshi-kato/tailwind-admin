import { render, cleanup, screen } from 'test-utils';
import Sidebar from './index';

afterEach(cleanup);

describe('Sidebar', () => {
  describe('Sidebar', () => {
    test('should render', () => {
      render(<Sidebar />);

      const sidebar = screen.getByRole('complementary', { name: 'サイドバー' });
      const header = screen.getByRole('banner');
      const navigation = screen.getByRole('navigation');

      expect(sidebar).toBeInTheDocument();
      expect(header).toBeInTheDocument();
      expect(navigation).toBeInTheDocument();
    });
  });
});
