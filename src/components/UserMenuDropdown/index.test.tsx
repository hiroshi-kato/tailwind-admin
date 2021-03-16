import { fireEvent, render, cleanup, screen } from 'test-utils';

import { defaultArgs } from 'stories/UserMenuDropdown.stories';
import UserMenuDropdown from './index';

afterEach(cleanup);

describe('UserMenuDropdown', () => {
  test('should render', () => {
    render(<UserMenuDropdown {...defaultArgs} />);
    const iconButton = screen.getByRole('button');
    expect(iconButton).toBeInTheDocument();

    fireEvent.click(iconButton);
    const menu = screen.getByRole('menu');
    const menuItems = screen.getAllByRole('menuItem');
    expect(menu).toBeInTheDocument();
    expect(menuItems).toBeInTheDocument();
  });
});
