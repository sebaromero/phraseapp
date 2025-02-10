import { Meta, StoryObj } from '@storybook/react'
import AddPhrase from '../presentation/containers/AddPhrase'

const meta: Meta<typeof AddPhrase> = {
  title: 'Components/AddPhrase',
  component: AddPhrase,
  argTypes: {
    onClose: { action: 'close' },
  },
}

export default meta

type Story = StoryObj<typeof AddPhrase>

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
}

export const ClosedModal: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
  },
}
