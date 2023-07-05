import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentrender/componentRender';
import { SidebarDeprecated } from './SidebarDeprecated';

describe('SidebarDeprecated', () => {
  test('Sidebar render on a screen', () => {
    componentRender(
      <SidebarDeprecated />,
    );
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    componentRender(
      <SidebarDeprecated />,
    );
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
