import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { componentRender } from '@/shared/lib/tests/componentrender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('Counter render on a screen', () => {
    componentRender(
      <Counter />,
      { initialState: { counter: { value: 10 } } },
    );
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', async () => {
    componentRender(
      <Counter />,
      { initialState: { counter: { value: 10 } } },
    );
    await userEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', async () => {
    componentRender(
      <Counter />,
      { initialState: { counter: { value: 10 } } },
    );
    await userEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
