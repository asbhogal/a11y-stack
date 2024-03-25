import { Billing } from "@/components/forms/Billing";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Forms/Billing",
  component: Billing,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Billing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BillingForm: Story = {};
