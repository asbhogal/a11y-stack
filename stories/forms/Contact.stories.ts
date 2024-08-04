import Contact from "@/components/forms/Contact";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Contact,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/Contact",
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactForm: Story = {};
