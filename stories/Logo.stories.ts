import Logo from '@/components/Logo';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Example/Logo',
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainLogo: Story = {
  args: {
    description:
      "The words 'a11y' and 'stack' in alternate white and blue color",
    title: 'a11y-stack logo',
  },
};
