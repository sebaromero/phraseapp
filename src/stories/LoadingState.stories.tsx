import type { Meta, StoryObj } from '@storybook/react'
import Skeleton from '../presentation/components/Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/LoadingState',
  component: Skeleton,
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => <Skeleton />,
}
