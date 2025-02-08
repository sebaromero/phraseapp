import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import EmptyState from '../presentation/components/EmptyState'

jest.mock('lucide-react', () => ({
  Inbox: () => <svg data-testid="inbox-icon" />,
}))

describe('EmptyState', () => {
  it('renders correctly', () => {
    render(<EmptyState />)

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(
      screen.getByText('No hay frases aún. Agrega una para empezar.'),
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText('No hay frases aún. Agrega una para empezar.'),
    ).toBeInTheDocument()
  })
})
