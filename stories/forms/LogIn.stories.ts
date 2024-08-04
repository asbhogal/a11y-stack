import LogIn from "@/components/forms/LogIn";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: LogIn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/LogIn",
} satisfies Meta<typeof LogIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogInForm: Story = {};
