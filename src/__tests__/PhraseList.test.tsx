import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PhraseList from '../presentation/containers/PhraseList'
import { mockPhrases } from '../constants/mockPhrases'

jest.mock('lucide-react', () => ({
  Loader2: () => <svg data-testid="loader" />,
  Trash2: () => <svg data-testid="trash" />,
  Inbox: () => <svg data-testid="inbox-icon" />,
  BookOpenText: () => <svg data-testid="book-open-text-icon" />,
  SearchX: () => <svg data-testid="search-x-icon" />,
}))

describe('PhraseList', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('shows empty state when there are no phrases', () => {
    render(<PhraseList phrases={[]} searchQuery="" />)

    expect(
      screen.getByText('Aún no hay frases. Agrega una para comenzar.'),
    ).toBeInTheDocument()
    expect(screen.getByTestId('book-open-text-icon')).toBeInTheDocument()
  })

  it('renders phrases correctly', () => {
    render(<PhraseList phrases={mockPhrases} searchQuery="" />)

    expect(
      screen.getByText(
        '"La imaginación es más importante que el conocimiento."',
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        '"El éxito es la suma de pequeños esfuerzos repetidos día tras día."',
      ),
    ).toBeInTheDocument()
  })

  it('shows empty state when no results match the search query', () => {
    render(<PhraseList phrases={mockPhrases} searchQuery="Hola" />)

    expect(
      screen.getByText('No se encontraron resultados para tu búsqueda.'),
    ).toBeInTheDocument()

    expect(screen.getByTestId('search-x-icon')).toBeInTheDocument()
  })
})
