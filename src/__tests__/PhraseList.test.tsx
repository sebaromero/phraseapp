import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import PhraseList from '../presentation/containers/PhraseList'

jest.mock('lucide-react', () => ({
  Loader2: () => <svg data-testid="loader" />,
  Trash2: () => <svg data-testid="trash" />,
  Inbox: () => <svg data-testid="inbox-icon" />,
}))

const mockPhrases = [
  { id: '1', text: 'La vida es bella', author: 'Charlie Chaplin' },
  { id: '2', text: 'Dios ha muerto' },
]

describe('PhraseList', () => {
  it('shows loading state initially', () => {
    render(<PhraseList phrases={[]} isLoading={true} onDelete={jest.fn()} />)

    expect(screen.getByLabelText('Cargando frases...')).toBeInTheDocument()
  })

  it('shows empty state when there are no phrases', async () => {
    render(<PhraseList phrases={[]} isLoading={false} onDelete={jest.fn()} />)

    expect(
      screen.getByText('No hay frases aún. Agrega una para empezar.'),
    ).toBeInTheDocument()
  })

  it('renders phrases correctly', () => {
    render(
      <PhraseList
        phrases={mockPhrases}
        isLoading={false}
        onDelete={jest.fn()}
      />,
    )

    expect(screen.getByText('"La vida es bella"')).toBeInTheDocument()
    expect(screen.getByText('"Dios ha muerto"')).toBeInTheDocument()
  })

  it('removes a phrase when delete is clicked', async () => {
    const onDeleteMock = jest.fn()
    render(
      <PhraseList
        phrases={mockPhrases}
        isLoading={false}
        onDelete={onDeleteMock}
      />,
    )

    const deleteButtons = screen.getAllByRole('button', {
      name: 'Eliminar frase',
    })

    fireEvent.click(deleteButtons[0])

    expect(onDeleteMock).toHaveBeenCalledWith('1')

    await waitFor(() => {
      expect(screen.queryByText('"La vida es bella"')).not.toBeInTheDocument()
    })
  })
})
