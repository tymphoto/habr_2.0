import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: '100px' }}><Story /></div>,
  ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  trigger: <Button>Open</Button>,
  items: [
    { content: 'first' },
    { content: 'second' },
    { content: 'third' },
  ],
};

export const topLeft = Template.bind({});
topLeft.args = {
  trigger: <Button>Open</Button>,
  direction: 'top left',
  items: [
    { content: 'first' },
    { content: 'second' },
    { content: 'third' },
  ],
};

export const topRight = Template.bind({});
topRight.args = {
  trigger: <Button>Open</Button>,
  direction: 'top right',
  items: [
    { content: 'first' },
    { content: 'second' },
    { content: 'third' },
  ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  trigger: <Button>Open</Button>,
  direction: 'bottom left',
  items: [
    { content: 'first' },
    { content: 'second' },
    { content: 'third' },
  ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  trigger: <Button>Open</Button>,
  direction: 'bottom right',
  items: [
    { content: 'first' },
    { content: 'second' },
    { content: 'third' },
  ],
};

export const hrefButton = Template.bind({});
hrefButton.args = {
  trigger: <Button>Open</Button>,
  items: [
    { content: 'first', href: 'http://localhost:3000/' },
    { content: 'second', href: 'http://localhost:3000/' },
    { content: 'third', href: 'http://localhost:3000/' },
  ],
};

export const haveDisabled = Template.bind({});
haveDisabled.args = {
  trigger: <Button>Open</Button>,
  items: [
    { content: 'first', href: 'http://localhost:3000/' },
    { content: 'second', href: 'http://localhost:3000/', disabled: true },
    { content: 'third', href: 'http://localhost:3000/', disabled: true },
  ],
};
