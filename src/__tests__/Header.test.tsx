import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../presentation/containers/Header'

jest.mock('lucide-react', () => ({
  Loader2: () => <svg data-testid="loader" />,
  Plus: () => <svg data-testid="plus" />,
}))

describe('Header', () => {
  it('renders the search input and add button', () => {
    render(
      <Header
        searchValue=""
        onSearchChange={jest.fn()}
        onAddPhrase={jest.fn()}
      />,
    )

    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Agregar frase' }),
    ).toBeInTheDocument()
  })

  it('calls onSearchChange when typing in the search input', () => {
    const onSearchChangeMock = jest.fn()
    render(
      <Header
        searchValue=""
        onSearchChange={onSearchChangeMock}
        onAddPhrase={jest.fn()}
      />,
    )

    const input = screen.getByRole('searchbox')
    fireEvent.change(input, { target: { value: 'Hola' } })

    expect(onSearchChangeMock).toHaveBeenCalledWith('Hola')
  })

  it('calls onAddPhrase when clicking the add button', () => {
    const onAddPhraseMock = jest.fn()
    render(
      <Header
        searchValue=""
        onSearchChange={jest.fn()}
        onAddPhrase={onAddPhraseMock}
      />,
    )

    const button = screen.getByRole('button', { name: 'Agregar frase' })
    fireEvent.click(button)

    expect(onAddPhraseMock).toHaveBeenCalledTimes(1)
  })
})
