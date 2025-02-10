import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../presentation/containers/Header'

jest.mock('lucide-react', () => ({
  Loader2: () => <svg data-testid="loader" />,
  Plus: () => <svg data-testid="plus" />,
}))

describe('Header', () => {
  const mockOnAddPhrase = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the search input and add button', () => {
    render(<Header searchQuery="" onAddPhrase={mockOnAddPhrase} />)

    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Agregar frase' }),
    ).toBeInTheDocument()
  })

  it('opens modal when clicking the add button', () => {
    render(<Header searchQuery="" onAddPhrase={mockOnAddPhrase} />)

    const button = screen.getByRole('button', { name: 'Agregar frase' })
    fireEvent.click(button)

    expect(mockOnAddPhrase).toHaveBeenCalledTimes(1)
  })
})
