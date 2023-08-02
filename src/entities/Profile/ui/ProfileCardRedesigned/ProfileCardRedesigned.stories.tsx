import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from '@/shared/assets/test/storybook.jpeg';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCardRedesigned } from './ProfileCardRedesigned';

export default {
  title: 'entities/Profile/ProfileCardRedesigned',
  component: ProfileCardRedesigned,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCardRedesigned>;

const Template: ComponentStory<typeof ProfileCardRedesigned> = (args) => <ProfileCardRedesigned {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'Tymoshenko',
    first: 'Artem',
    city: 'Karon',
    currency: Currency.THB,
    avatar: AvatarImg,
  },
};

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
