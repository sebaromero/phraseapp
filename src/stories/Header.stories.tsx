import type { Meta, StoryObj } from '@storybook/react'
import Header from '../presentation/containers/Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    onSearchChange: { action: 'search updated' },
    onAddPhrase: { action: 'add clicked' },
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    searchValue: '',
    onSearchChange: () => {},
    onAddPhrase: () => {},
  },
}

export const WithText: Story = {
  args: {
    searchValue: 'Ejemplo de búsqueda',
    onSearchChange: () => {},
    onAddPhrase: () => {},
  },
}
