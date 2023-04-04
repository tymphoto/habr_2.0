import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { EditableProfilePageHeader } from './EditableProfilePageHeader';

export default {
  title: 'features/editableProfileCard/EditableProfilePageHeader',
  component: EditableProfilePageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableProfilePageHeader>;

const Template: ComponentStory<typeof EditableProfilePageHeader> = (args) => <EditableProfilePageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'Tymoshenko',
      first: 'Artem',
      city: 'Karon',
      currency: Currency.THB,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'Tymoshenko',
      first: 'Artem',
      city: 'Karon',
      currency: Currency.THB,
    },
  },
})];
