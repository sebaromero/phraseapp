import type { Meta, StoryObj } from '@storybook/react'
import ActionButton from '../presentation/components/ActionButton'
import { Trash, Pencil } from 'lucide-react'

const meta: Meta<typeof ActionButton> = {
  title: 'Components/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof ActionButton>

export const Icon: Story = {
  args: {
    icon: <Trash />,
    onClick: () => {},
    ariaLabel: 'Eliminar',
    title: 'Borrar elemento',
  },
}

export const IconAndText: Story = {
  args: {
    icon: <Pencil />,
    onClick: () => {},
    ariaLabel: 'Editar',
    title: 'Editar elemento',
    text: 'Editar',
  },
}

export const Disabled: Story = {
  args: {
    icon: <Trash />,
    onClick: () => {},
    ariaLabel: 'Eliminar',
    title: 'No disponible',
    disabled: true,
  },
}
