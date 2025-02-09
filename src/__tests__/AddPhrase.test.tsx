import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import AddPhrase from '../presentation/containers/AddPhrase'

jest.mock('lucide-react', () => ({
  Loader2: () => <svg data-testid="loader" />,
  Plus: () => <svg data-testid="plus" />,
  X: () => <svg data-testid="x" />,
}))

const mockOnAdd = jest.fn()
const mockOnClose = jest.fn()

describe('AddPhrase', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render correctly when open', () => {
    render(<AddPhrase isOpen={true} onClose={mockOnClose} onAdd={mockOnAdd} />)

    expect(
      screen.getByPlaceholderText('Escribe una nueva frase'),
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Autor (opcional)')).toBeInTheDocument()
  })

  it('should not render when closed', () => {
    render(<AddPhrase isOpen={false} onClose={mockOnClose} onAdd={mockOnAdd} />)

    expect(screen.queryByPlaceholderText('Escribe una nueva frase')).toBeNull()
  })

  it('should show error when submitting without text', async () => {
    render(<AddPhrase isOpen={true} onClose={mockOnClose} onAdd={mockOnAdd} />)

    fireEvent.click(screen.getByText('Agregar frase'))

    expect(
      await screen.findByText('La frase es obligatoria.'),
    ).toBeInTheDocument()
    expect(mockOnAdd).not.toHaveBeenCalled()
  })

  it('should call onAdd and close modal on valid submission', async () => {
    render(<AddPhrase isOpen={true} onClose={mockOnClose} onAdd={mockOnAdd} />)

    fireEvent.change(screen.getByPlaceholderText('Escribe una nueva frase'), {
      target: { value: 'Una frase inspiradora' },
    })

    fireEvent.click(screen.getByText('Agregar frase'))

    await waitFor(() => {
      expect(mockOnAdd).toHaveBeenCalledWith('Una frase inspiradora', '')
      expect(mockOnClose).toHaveBeenCalled()
    })
  })

  it('should reset inputs when closed', async () => {
    render(<AddPhrase isOpen={true} onClose={mockOnClose} onAdd={mockOnAdd} />)

    const textInput = screen.getByPlaceholderText('Escribe una nueva frase')
    fireEvent.change(textInput, { target: { value: 'Prueba' } })

    fireEvent.click(screen.getByTestId('x'))

    expect(textInput).toHaveValue('')
  })
})
