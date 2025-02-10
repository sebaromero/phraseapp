import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import EmptyState from '../presentation/components/EmptyState'

const MockIcon = () => (
  <svg data-testid="icon">
    <circle cx="10" cy="10" r="5" fill="black" />
  </svg>
)

describe('EmptyState', () => {
  it('text renders correctly', () => {
    render(
      <EmptyState
        icon={<MockIcon />}
        text="No hay frases aún. Agrega una para empezar."
      />,
    )

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(
      screen.getByText('No hay frases aún. Agrega una para empezar.'),
    ).toBeInTheDocument()
  })

  it('icon renders correctly', () => {
    render(
      <EmptyState
        icon={<MockIcon />}
        text="No hay frases aún. Agrega una para empezar."
      />,
    )

    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
  })
})
