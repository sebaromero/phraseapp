import { Meta, StoryObj } from '@storybook/react'
import PhraseCard from '../presentation/components/PhraseCard'

const meta: Meta<typeof PhraseCard> = {
  title: 'Components/PhraseCard',
  component: PhraseCard,
  tags: ['autodocs'],
  args: {
    text: 'La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir adelante.',
    author: 'Albert Einstein',
    onDelete: () => alert('Frase eliminada'),
    color: 'rgba(128, 0, 128, 0.2)',
  },
}

export default meta
type Story = StoryObj<typeof PhraseCard>

export const Default: Story = {}

export const LongPhrase: Story = {
  args: {
    text: 'El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.',
    author: 'Albert Schweitzer',
    color: 'rgba(0, 255, 0, 0.2)',
  },
}

export const AnonymousAuthor: Story = {
  args: {
    text: 'La inspiración existe, pero tiene que encontrarte trabajando.',
    author: null,
    color: 'rgba(255, 165, 0, 0.2)',
  },
}
