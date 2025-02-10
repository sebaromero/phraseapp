import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../presentation/containers/Header'

jest.mock('lucide-react', () => ({
  Loader2: () => <svg data-testid="loader" />,
  Plus: () => <svg data-testid="plus" />,
}))

const mockSetSearch = jest.fn()

jest.mock('../store/phraseStore', () => ({
  usePhraseStore: jest.fn(() => ({
    searchQuery: '',
    setSearch: mockSetSearch,
  })),
}))

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the search input and add button', () => {
    render(<Header onAddPhrase={jest.fn()} />)

    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Agregar frase' }),
    ).toBeInTheDocument()
  })

  it('seach any phrase when typing in the search input', () => {
    render(<Header onAddPhrase={jest.fn()} />)

    const input = screen.getByRole('searchbox')
    fireEvent.change(input, { target: { value: 'Hola' } })

    expect(mockSetSearch).toHaveBeenCalledWith('Hola')
  })

  it('open modal when clicking the add button', () => {
    const onAddPhraseMock = jest.fn()
    render(<Header onAddPhrase={onAddPhraseMock} />)

    const button = screen.getByRole('button', { name: 'Agregar frase' })
    fireEvent.click(button)

    expect(onAddPhraseMock).toHaveBeenCalledTimes(1)
  })
})
