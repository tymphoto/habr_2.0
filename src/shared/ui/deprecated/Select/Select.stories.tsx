import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
  title: 'ui/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Укажите значение',
  options: [
    { value: '1', content: 'один' },
    { value: '2', content: 'два' },
    { value: '3', content: 'три' },
  ],
};
