import Subscribe from "@/components/forms/Subscribe";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Subscribe,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/Subscribe",
} satisfies Meta<typeof Subscribe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubscribeToNewsletter: Story = {};
