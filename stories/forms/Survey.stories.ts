import Survey from "@/components/forms/Survey";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Forms/Survey",
  component: Survey,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Survey>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SurveyForm: Story = {};
