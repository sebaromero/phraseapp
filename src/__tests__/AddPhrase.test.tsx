import { render, screen, fireEvent } from '@testing-library/react'
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
  it('should render correctly when open', () => {
    render(<AddPhrase isOpen={true} onClose={mockOnClose} onAdd={mockOnAdd} />)

    expect(
      screen.getByPlaceholderText('Escribe una nueva frase'),
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Autor (opcional)')).toBeInTheDocument()
  })

  it('should call onAdd when the button is clicked', () => {
    render(<AddPhrase isOpen={true} onClose={mockOnClose} onAdd={mockOnAdd} />)

    fireEvent.change(screen.getByPlaceholderText('Escribe una nueva frase'), {
      target: { value: 'Nueva frase' },
    })
    fireEvent.change(screen.getByPlaceholderText('Autor (opcional)'), {
      target: { value: 'Autor Test' },
    })
    fireEvent.click(screen.getByTitle('Agregar frase'))

    expect(mockOnAdd).toHaveBeenCalledWith('Nueva frase', 'Autor Test')
    expect(mockOnClose).toHaveBeenCalled()
  })

  it('should not call onAdd if the input text is empty', () => {
    render(<AddPhrase isOpen={true} onClose={mockOnClose} onAdd={mockOnAdd} />)

    fireEvent.change(screen.getByPlaceholderText('Escribe una nueva frase'), {
      target: { value: '' },
    })
    fireEvent.click(screen.getByTitle('Agregar frase'))

    expect(mockOnAdd).not.toHaveBeenCalled()
    expect(mockOnClose).not.toHaveBeenCalled()
  })

  it('should reset inputs after adding a phrase', () => {
    render(<AddPhrase isOpen={true} onClose={mockOnClose} onAdd={mockOnAdd} />)

    const phraseInput = screen.getByPlaceholderText(
      'Escribe una nueva frase',
    ) as HTMLInputElement
    const authorInput = screen.getByPlaceholderText(
      'Autor (opcional)',
    ) as HTMLInputElement

    fireEvent.change(phraseInput, { target: { value: 'Nueva frase' } })
    fireEvent.change(authorInput, { target: { value: 'Autor Test' } })
    fireEvent.click(screen.getByTitle('Agregar frase'))

    expect(phraseInput.value).toBe('')
    expect(authorInput.value).toBe('')
  })
})
