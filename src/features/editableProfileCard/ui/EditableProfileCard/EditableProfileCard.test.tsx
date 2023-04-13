import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { componentRender } from '@/shared/lib/tests/componentrender/componentRender';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  first: 'admin',
  lastname: 'admin',
  age: 45,
  currency: Currency.USD,
  country: Country.Kazakhstan,
  city: 'Almaty',
  username: 'admin123',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: '1', username: 'admin' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  test('Readonly have to change', async () => {
    componentRender(
      <EditableProfileCard id="1" />,
      options,
    );
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));
    expect(screen.getByTestId('EditableProfilePageHeader.CancelButton')).toBeInTheDocument();
  });

  test('Reset all data when click on cancel button', async () => {
    componentRender(
      <EditableProfileCard id="1" />,
      options,
    );
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
  });

  test('Have to get ERROR', async () => {
    componentRender(
      <EditableProfileCard id="1" />,
      options,
    );
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('If no validation errors have to go PUT request to server', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    componentRender(
      <EditableProfileCard id="1" />,
      options,
    );
    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.EditButton'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfilePageHeader.SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
