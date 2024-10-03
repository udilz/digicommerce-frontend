import {Button} from "./button";
import type { Meta, StoryObj } from '@storybook/react';
import { BugIcon, PenLineIcon } from "lucide-react"


const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
      variant: {
        control: "select",
        options: ["primary", "secondary", "outline"],
      },
      iconOnly: {
        type: "boolean",
        control: "select",
        options: [true, false],
      },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
    startContent: <BugIcon/>
  },
};

export const Outline: Story = {
    args: {
      variant: "outline",
      children: "Button",
      endContent: <PenLineIcon size={12} />,
    },
  };