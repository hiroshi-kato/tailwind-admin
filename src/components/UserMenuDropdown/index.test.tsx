import { fireEvent, render, cleanup, screen } from 'test-utils';

import UserMenuDropdown, { UserMenuDropdownProps } from './index';

afterEach(cleanup);

const defaultArgs: UserMenuDropdownProps = {
  iconUrl:
    'https://avatars.githubusercontent.com/u/25237234?s=460&u=f0fa7ee73d6e6d562a175980de98f4a6e567da93&v=4',
  menuItems: [
    { content: 'Your Profile', onClick: () => '' },
    { content: 'Settings', onClick: () => '' },
    { content: 'Sign out', onClick: () => '' },
  ],
};

describe('UserMenuDropdown', () => {
  test('should render', () => {
    render(<UserMenuDropdown {...defaultArgs} />);
    const iconButton = screen.getByRole('button');
    expect(iconButton).toBeInTheDocument();

    fireEvent.click(iconButton);
    const menu = screen.getByRole('menu');
    const menuItems = screen.getAllByRole('menuitem');
    expect(menu).toBeInTheDocument();
    expect(menuItems).toHaveLength(3);
  });
});
