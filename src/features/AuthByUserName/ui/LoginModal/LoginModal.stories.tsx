import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { LoginModal } from './LoginModal';

export default {
  title: 'features/AuthByUserName/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
};
Primary.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd' },
})];

export const withError = Template.bind({});
withError.args = {
  isOpen: true,
};
withError.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];

export const withErrorDark = Template.bind({});
withErrorDark.args = {
  isOpen: true,
};
withErrorDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];
