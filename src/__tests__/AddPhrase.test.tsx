import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import AddPhrase from '../presentation/containers/AddPhrase'

jest.mock('lucide-react', () => ({
  Loader2: () => <svg data-testid="loader" />,
  Plus: () => <svg data-testid="plus" />,
  X: () => <svg data-testid="x" />,
}))

jest.mock('../store/phraseStore', () => ({
  usePhraseStore: jest.fn(() => ({
    addPhrase: jest.fn(),
  })),
}))

const mockOnClose = jest.fn()

describe('AddPhrase', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render correctly when open', () => {
    render(<AddPhrase isOpen={true} onClose={mockOnClose} />)

    expect(
      screen.getByPlaceholderText('Escribe una nueva frase'),
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Autor (opcional)')).toBeInTheDocument()
  })

  it('should not render when closed', () => {
    render(<AddPhrase isOpen={false} onClose={mockOnClose} />)

    expect(screen.queryByPlaceholderText('Escribe una nueva frase')).toBeNull()
  })

  it('should show error when submitting without text', async () => {
    render(<AddPhrase isOpen={true} onClose={mockOnClose} />)

    fireEvent.click(screen.getByText('Agregar frase'))

    expect(
      await screen.findByText('La frase es obligatoria.'),
    ).toBeInTheDocument()
    expect(mockOnClose).not.toHaveBeenCalled()
  })

  it('should call onClose and reset inputs on valid submission', async () => {
    render(<AddPhrase isOpen={true} onClose={mockOnClose} />)

    const textInput = screen.getByPlaceholderText('Escribe una nueva frase')
    fireEvent.change(textInput, { target: { value: 'Una frase inspiradora' } })

    fireEvent.click(screen.getByText('Agregar frase'))

    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalled()
    })

    expect(textInput).toHaveValue('')
  })

  it('should reset inputs when closed', async () => {
    render(<AddPhrase isOpen={true} onClose={mockOnClose} />)

    const textInput = screen.getByPlaceholderText('Escribe una nueva frase')
    fireEvent.change(textInput, { target: { value: 'Prueba' } })

    fireEvent.click(screen.getByTestId('x'))

    expect(textInput).toHaveValue('')
  })
})
