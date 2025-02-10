import type { Meta, StoryObj } from '@storybook/react'
import PhraseList from '../presentation/containers/PhraseList'
import { mockPhrases } from '../constants/mockPhrases'

const meta: Meta<typeof PhraseList> = {
  title: 'Components/PhraseList',
  component: PhraseList,
  args: {
    phrases: mockPhrases,
    searchQuery: '',
  },
}

export default meta

type Story = StoryObj<typeof PhraseList>

export const Default: Story = {}

export const Empty: Story = {
  args: {
    phrases: [],
  },
}

export const Filtered: Story = {
  args: {
    searchQuery: 'steve',
  },
}
