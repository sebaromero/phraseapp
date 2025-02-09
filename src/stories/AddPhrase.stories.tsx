import { Meta, StoryObj } from '@storybook/react'
import AddPhrase from '../presentation/containers/AddPhrase'

const meta: Meta<typeof AddPhrase> = {
  title: 'Components/AddPhrase',
  component: AddPhrase,
  argTypes: {
    onClose: { action: 'close' },
    onAdd: { action: 'add phrase' },
  },
}

export default meta

type Story = StoryObj<typeof AddPhrase>

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onAdd: (text: string, author?: string) => {
      console.log('Phrase added:', text, author)
    },
  },
}

export const ClosedModal: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    onAdd: () => {},
  },
}

export const WithNoAuthor: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onAdd: (text: string) => {
      console.log('Phrase added:', text)
    },
  },
}
