import type { Meta, StoryObj } from '@storybook/react'
import Header from '../presentation/containers/Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    onAddPhrase: { action: 'add clicked' },
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    onAddPhrase: () => alert('Modal de agregar frase'),
  },
}
