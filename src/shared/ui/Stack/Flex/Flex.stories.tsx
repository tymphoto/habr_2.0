import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8',
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16',
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  gap: '32',
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};

export const Сolumn = Template.bind({});
Сolumn.args = {
  direction: 'column',
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};

export const СolumnGap4 = Template.bind({});
СolumnGap4.args = {
  direction: 'column',
  gap: '4',
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};

export const СolumnGap8 = Template.bind({});
СolumnGap8.args = {
  direction: 'column',
  gap: '8',
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};

export const СolumnGap16 = Template.bind({});
СolumnGap16.args = {
  direction: 'column',
  gap: '16',
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};

export const СolumnGap32 = Template.bind({});
СolumnGap32.args = {
  direction: 'column',
  gap: '32',
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};

export const СolumnAlignStart = Template.bind({});
СolumnAlignStart.args = {
  direction: 'column',
  align: 'start',
  gap: '32',
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};

export const СolumnAlignCenter = Template.bind({});
СolumnAlignCenter.args = {
  direction: 'column',
  align: 'center',
  gap: '32',
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};

export const СolumnAlignEnd = Template.bind({});
СolumnAlignEnd.args = {
  direction: 'column',
  align: 'end',
  gap: '32',
  children: (
    <>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </>
  ),
};
