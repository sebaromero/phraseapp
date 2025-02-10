import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import PhraseList from '../presentation/containers/PhraseList'
import { IPhrase } from '../core/Phrase/phrase'

jest.mock('lucide-react', () => ({
  Loader2: () => <svg data-testid="loader" />,
  Trash2: () => <svg data-testid="trash" />,
  Inbox: () => <svg data-testid="inbox-icon" />,
  BookOpenText: () => <svg data-testid="book-open-text-icon" />,
}))

const mockPhrases: IPhrase[] = [
  {
    id: '1',
    text: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.',
    author: 'John Lennon',
    color: 'rgba(255, 0, 0, 0.2)',
  },
  {
    id: '2',
    text: 'Ser o no ser, esa es la cuestión.',
    author: 'William Shakespeare',
    color: 'rgba(0, 0, 255, 0.2)',
  },
  {
    id: '3',
    text: 'No hay camino para la paz, la paz es el camino.',
    author: 'Mahatma Gandhi',
    color: 'rgba(0, 255, 0, 0.2)',
  },
  {
    id: '4',
    text: 'La única manera de hacer un gran trabajo es amar lo que haces.',
    author: 'Steve Jobs',
    color: 'rgba(255, 255, 0, 0.2)',
  },
  {
    id: '5',
    text: 'La imaginación es más importante que el conocimiento.',
    author: 'Albert Einstein',
    color: 'rgba(255, 165, 0, 0.2)',
  },
  {
    id: '6',
    text: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.',
    author: 'Robert Collier',
    color: 'rgba(128, 0, 128, 0.2)',
  },
]

describe('PhraseList', () => {
  const mockUsePhraseStore = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()

    mockUsePhraseStore.mockReturnValue({
      phrases: mockPhrases,
      deletingIds: [],
      searchQuery: '',
      removePhrase: jest.fn(),
    })

    jest.mock('../store/phraseStore', () => ({
      usePhraseStore: mockUsePhraseStore,
    }))
  })

  it('shows empty state when there are no phrases', () => {
    render(<PhraseList />)

    expect(
      screen.getByText('Aún no hay frases. Agrega una para comenzar.'),
    ).toBeInTheDocument()
  })

  it('renders phrases correctly', () => {
    render(<PhraseList />)

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

  it('removes a phrase when delete is clicked', async () => {
    const onDeleteMock = jest.fn()
    render(<PhraseList />)

    const deleteButtons = screen.getAllByRole('button', {
      name: 'Eliminar frase',
    })

    fireEvent.click(deleteButtons[0])

    expect(onDeleteMock).toHaveBeenCalledWith('1')

    await waitFor(() => {
      expect(
        screen.queryByText('"No hay camino para la paz, la paz es el camino."'),
      ).not.toBeInTheDocument()
    })
  })
})
