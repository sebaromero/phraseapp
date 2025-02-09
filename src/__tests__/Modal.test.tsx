import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from '../presentation/components/Modal'

jest.mock('lucide-react', () => ({
  X: () => <svg data-testid="x" />,
}))

describe('Modal', () => {
  it('should not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={jest.fn()} title="Test Modal">
        Contenido
      </Modal>,
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('should render when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()} title="Test Modal">
        Contenido
      </Modal>,
    )

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Contenido')).toBeInTheDocument()
  })

  it('should call onClose when clicking outside the modal', () => {
    const onCloseMock = jest.fn()
    render(
      <Modal isOpen={true} onClose={onCloseMock} title="Test Modal">
        Contenido
      </Modal>,
    )

    fireEvent.click(screen.getByRole('dialog'))
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  it('should NOT call onClose when clicking inside the modal', () => {
    const onCloseMock = jest.fn()
    render(
      <Modal isOpen={true} onClose={onCloseMock} title="Test Modal">
        Contenido
      </Modal>,
    )

    fireEvent.click(screen.getByText('Test Modal'))
    expect(onCloseMock).not.toHaveBeenCalled()
  })

  it('should call onClose when clicking the close button', () => {
    const onCloseMock = jest.fn()
    render(
      <Modal isOpen={true} onClose={onCloseMock} title="Test Modal">
        Contenido
      </Modal>,
    )

    fireEvent.click(screen.getByLabelText('Cerrar modal'))
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
