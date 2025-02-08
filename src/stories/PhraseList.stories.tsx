import type { Meta, StoryObj } from '@storybook/react'
import PhraseList from '../presentation/containers/PhraseList'

const mockPhrases = [
  { id: '1', text: 'Frase 1', author: 'Autor 1' },
  { id: '2', text: 'Frase 2', author: 'Autor 2' },
]

const meta: Meta<typeof PhraseList> = {
  title: 'Components/PhraseList',
  component: PhraseList,
  args: {
    phrases: mockPhrases,
    isLoading: false,
    onDelete: () => {},
  },
}

export default meta

type Story = StoryObj<typeof PhraseList>

export const Default: Story = {}

export const Loading: Story = {
  args: {
    isLoading: true,
    phrases: [],
  },
}

export const Empty: Story = {
  args: {
    isLoading: false,
    phrases: [],
  },
}
