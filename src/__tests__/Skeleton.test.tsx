import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Skeleton from '../presentation/components/Skeleton'

describe('LoadingState', () => {
  it('renders correctly', () => {
    render(<Skeleton />)

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByLabelText('Cargando frases...')).toBeInTheDocument()
    expect(screen.getAllByTestId('skeleton')).toHaveLength(3)
  })
})
