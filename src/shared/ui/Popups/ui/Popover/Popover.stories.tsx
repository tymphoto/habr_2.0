import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../../../Button/Button';

export default {
  title: 'shared/Popups/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: '100px' }}><Story /></div>,
  ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  trigger: <Button>Open</Button>,
  children: <Button>Open</Button>,
};

export const topLeft = Template.bind({});
topLeft.args = {
  trigger: <Button>Open</Button>,
  direction: 'top left',
  children: <Button>Open</Button>,
};

export const topRight = Template.bind({});
topRight.args = {
  trigger: <Button>Open</Button>,
  direction: 'top right',
  children: <Button>Open</Button>,
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  trigger: <Button>Open</Button>,
  direction: 'bottom left',
  children: <Button>Open</Button>,
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  trigger: <Button>Open</Button>,
  direction: 'bottom right',
  children: <Button>Open</Button>,
};
