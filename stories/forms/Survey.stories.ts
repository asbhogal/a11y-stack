import Survey from "@/components/forms/Survey";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Survey,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Forms/Survey",
} satisfies Meta<typeof Survey>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SurveyForm: Story = {};
