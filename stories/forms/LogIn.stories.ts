import LogIn from "@/components/forms/LogIn";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Forms/LogIn",
  component: LogIn,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LogIn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogInForm: Story = {};
