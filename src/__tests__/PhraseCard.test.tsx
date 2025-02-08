import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PhraseCard from '../presentation/components/PhraseCard'

jest.mock('lucide-react', () => ({
  Loader2: () => <svg data-testid="loader" />,
  Trash2: () => <svg data-testid="trash" />,
}))

const mockProps = {
  text: 'La vida es bella',
  author: 'Charlie Chaplin',
  isDeleting: false,
  onDelete: jest.fn(),
}

describe('PhraseCard', () => {
  it('renders correctly with text and author', () => {
    render(<PhraseCard {...mockProps} />)

    expect(screen.getByText('"La vida es bella"')).toBeInTheDocument()
    expect(screen.getByText('- Charlie Chaplin')).toBeInTheDocument()
  })

  it('renders "Anónimo" when author is null', () => {
    render(<PhraseCard {...mockProps} author={null} />)

    expect(screen.getByText('- Anónimo')).toBeInTheDocument()
  })

  it('calls onDelete when delete button is clicked', () => {
    render(<PhraseCard {...mockProps} />)

    const deleteButton = screen.getByRole('button', { name: 'Eliminar frase' })
    fireEvent.click(deleteButton)

    expect(mockProps.onDelete).toHaveBeenCalledTimes(1)
  })

  it('disables delete button when isDeleting is true', () => {
    render(<PhraseCard {...mockProps} isDeleting={true} />)

    const deleteButton = screen.getByRole('button', { name: 'Eliminar frase' })
    expect(deleteButton).toBeDisabled()
  })
})
