import type { Meta, StoryObj } from "@storybook/react";
import Header from "../components/globals/Header";

const meta = {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "Example/Header",
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryHeader: Story = {};
