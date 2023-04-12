import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticelRating from './ArticleRating';

export default {
  title: 'features/ArticelRating',
  component: ArticelRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticelRating>;

const Template: ComponentStory<typeof ArticelRating> = (args) => <ArticelRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
