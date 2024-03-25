import Contact from "@/components/forms/Contact";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Forms/Contact",
  component: Contact,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactForm: Story = {};
