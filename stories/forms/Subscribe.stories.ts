import Subscribe from "@/components/forms/Subscribe";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Forms/Subscribe",
  component: Subscribe,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Subscribe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubscribeToNewsletter: Story = {};
