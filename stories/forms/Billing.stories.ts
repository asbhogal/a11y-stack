import { Billing } from "@/components/forms/Billing";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Billing,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/Billing",
} satisfies Meta<typeof Billing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BillingForm: Story = {};
