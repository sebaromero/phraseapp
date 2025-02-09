import type { Meta, StoryObj } from '@storybook/react'
import EmptyState from '../presentation/components/EmptyState'
import { SearchX } from 'lucide-react'

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
}

export default meta

type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  render: () => (
    <EmptyState
      icon={<SearchX />}
      text="No se encontraron resultados para tu búsqueda."
    />
  ),
}
