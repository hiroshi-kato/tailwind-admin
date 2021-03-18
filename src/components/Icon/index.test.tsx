import { screen, render, cleanup } from 'test-utils';

import Icon from './index';

afterEach(cleanup);

describe('Icon', () => {
  test('should render ', () => {
    render(<Icon name="dashboard" />);
    render(<Icon name="users" />);
    render(<Icon name="flag" />);
    const dashboardIcon = screen.getByLabelText('dashboard icon');
    const usersIcon = screen.getByLabelText('users icon');
    const flagIcon = screen.getByLabelText('flag icon');
    expect(dashboardIcon).toBeInTheDocument();
    expect(usersIcon).toBeInTheDocument();
    expect(flagIcon).toBeInTheDocument();
  });
});
