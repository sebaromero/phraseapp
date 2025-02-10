import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ErrorBoundary from '../presentation/layouts/ErrorBundary/ErrorBoundary'

jest.mock('lucide-react', () => ({
  CircleAlert: () => <svg data-testid="circle-alert" />,
}))

const ProblematicComponent: React.FC = () => {
  throw new Error('Error simulado')
}

describe('ErrorLayout', () => {
  it('should render children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <div>Componente seguro</div>
      </ErrorBoundary>,
    )

    expect(screen.getByText('Componente seguro')).toBeInTheDocument()
  })

  it('should show an error message when an error is thrown in child component', () => {
    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>,
    )

    // Verifica que el mensaje de error aparece
    expect(
      screen.getByText(
        'Algo salió mal, por favor intenta nuevamente más tarde.',
      ),
    ).toBeInTheDocument()
  })
})
