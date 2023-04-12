import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticelRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
  title: 'features/ArticelRating',
  component: ArticelRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticelRating>;

const Template: ComponentStory<typeof ArticelRating> = (args) => <ArticelRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  articleId: '1',
};
Normal.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        { rate: 5 },
      ],
    },
  ],
};

export const WithoutRating = Template.bind({});
WithoutRating.args = {
  articleId: '1',
};
WithoutRating.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
];
WithoutRating.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
