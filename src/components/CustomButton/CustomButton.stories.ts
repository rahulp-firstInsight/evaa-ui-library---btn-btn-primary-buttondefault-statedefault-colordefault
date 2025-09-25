import type { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from './CustomButton';

const meta: Meta<typeof CustomButton> = {
  title: 'Design System/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component built with Bootstrap classes and custom styling. Supports multiple variants, sizes, and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
      description: 'Button color variant based on Bootstrap theme colors',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size following Bootstrap sizing conventions',
    },
    hasIcon: {
      control: { type: 'boolean' },
      description: 'Whether to show the close icon',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state of the button',
    },
    label: {
      control: { type: 'text' },
      description: 'Button text content',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    label: 'Button',
    hasIcon: true,
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
};

// Variant stories
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    hasIcon: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    hasIcon: true,
  },
};

export const Success: Story = {
  args: {
    label: 'Success Button',
    variant: 'success',
    hasIcon: true,
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
    hasIcon: true,
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Button',
    variant: 'warning',
    hasIcon: true,
  },
};

export const Info: Story = {
  args: {
    label: 'Info Button',
    variant: 'info',
    hasIcon: true,
  },
};

// Size stories
export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'sm',
    hasIcon: true,
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Button',
    size: 'md',
    hasIcon: true,
  },
};

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'lg',
    hasIcon: true,
  },
};

// State stories
export const WithoutIcon: Story = {
  args: {
    label: 'No Icon Button',
    hasIcon: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
    hasIcon: true,
  },
};

// Interactive stories
export const AllVariants: Story = {
  render: () => {
    const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'] as const;
    return (
      <div className="d-flex flex-wrap gap-3">
        {variants.map((variant) => (
          <CustomButton
            key={variant}
            label={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Button`}
            variant={variant}
            hasIcon={true}
          />
        ))}
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const sizes = ['sm', 'md', 'lg'] as const;
    return (
      <div className="d-flex flex-column align-items-center gap-3">
        {sizes.map((size) => (
          <CustomButton
            key={size}
            label={`${size.toUpperCase()} Button`}
            size={size}
            hasIcon={true}
          />
        ))}
      </div>
    );
  },
};
