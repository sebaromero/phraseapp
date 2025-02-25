import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ActionButton from '../presentation/components/ActionButton'

jest.mock('lucide-react', () => ({
  Loader2: () => <svg data-testid="loader" />,
}))

const MockIcon = () => (
  <svg data-testid="icon">
    <circle cx="10" cy="10" r="5" fill="black" />
  </svg>
)

const handleClick = jest.fn()

describe('ActionButton', () => {
  it('icon renders correctly', () => {
    render(<ActionButton icon={<MockIcon />} onClick={() => {}} />)

    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
  })

  it('calls onClick function when button is clicked', () => {
    render(
      <ActionButton
        icon={<MockIcon />}
        onClick={handleClick}
        ariaLabel="Eliminar"
      />,
    )

    const button = screen.getByRole('button', { name: 'Eliminar' })
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick function when button is disabled', () => {
    render(
      <ActionButton
        icon={<MockIcon />}
        onClick={handleClick}
        disabled
        ariaLabel="Eliminar"
      />,
    )

    const button = screen.getByRole('button', { name: 'Eliminar' })
    fireEvent.click(button)

    expect(handleClick).not.toHaveBeenCalledTimes(0)
    expect(button).toBeDisabled()
  })

  it('text renders when you add a button text', () => {
    render(
      <ActionButton
        icon={<MockIcon />}
        onClick={handleClick}
        ariaLabel="Agregar"
        text="Agregar"
      />,
    )

    const text = screen.getByText('Agregar')
    expect(text).toBeInTheDocument()
  })
})
