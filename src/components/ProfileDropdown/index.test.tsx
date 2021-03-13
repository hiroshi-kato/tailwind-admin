import { render, cleanup, screen } from 'test-utils';
import ProfileDropdown from './index';

afterEach(cleanup);

describe('ProfileDropdown', () => {
  test('should render', () => {
    render(<ProfileDropdown />);
    const profileDropdown = screen.getByLabelText('プロフィールメニュー');

    expect(profileDropdown).toBeInTheDocument();
  });
});
