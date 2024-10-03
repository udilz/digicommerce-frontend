
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { AtSign, Lock } from 'lucide-react';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputStandard: Story = {
  args: {
    size: "medium",
    placeholder: "Enter text",
  },
};

export const InputWithIcon: Story = {
    args: {
      size: "medium",
      placeholder: "Enter text",
      withIcon: true,
      icon: <AtSign size={16}/>
    },
  };
  

  export const PasswordInputWithIcon: Story = {
    args: {
      size: "medium",
      placeholder: "Enter text",
      withIcon: true,
      icon: <Lock size={16}/>,
      type: "password"
    },
  };
  
