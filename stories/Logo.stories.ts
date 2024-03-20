import Logo from "@/components/Logo";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainLogo: Story = {};
