import type { Meta, StoryObj } from '@storybook/react'
import EmptyState from '../presentation/components/EmptyState'

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
}

export default meta

type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  render: () => <EmptyState />,
}
