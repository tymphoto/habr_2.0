import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';
import { validateProfileData } from './validateProfileData';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'Tymoshenko',
  first: 'Artem',
  city: 'Karon',
  currency: Currency.THB,
};

describe('validateProfileData.test', () => {
  test('succes', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and lastname', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: 0 });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
