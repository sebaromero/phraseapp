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

describe('ActionButton', () => {
  it('Icon renders correctly', () => {
    render(<ActionButton icon={<MockIcon />} onClick={() => {}} />)

    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
  })

  it('Calls onClick function when button is clicked', () => {
    const handleClick = jest.fn()
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

  it('Not calls onClick function when button is disabled', () => {
    const handleClick = jest.fn()
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

    expect(handleClick).not.toHaveBeenCalled()
    expect(button).toBeDisabled()
  })
})
