import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import withModal from '../../hocs/withModal'
import Modal from '../../presentation/components/Modal'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}))

jest.mock('lucide-react', () => ({
  X: () => <svg data-testid="x" />,
}))

const ModalWithHoc = withModal(Modal)

describe('withModal', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should add overflow-hidden to body when modal is open', () => {
    const onClose = jest.fn()
    render(
      <ModalWithHoc isOpen={true} onClose={onClose} title="Titulo">
        Contenido
      </ModalWithHoc>,
    )

    setTimeout(() => {
      expect(document.body.classList.contains('overflow-hidden')).toBe(true)
    }, 0)
  })

  it('should remove overflow-hidden from body when modal is closed', () => {
    const onClose = jest.fn()
    render(
      <ModalWithHoc isOpen={false} onClose={onClose} title="Titulo">
        Contenido
      </ModalWithHoc>,
    )

    expect(document.body.classList.contains('overflow-hidden')).toBe(false)
  })

  it('should not close the modal when a different key is pressed', () => {
    const onClose = jest.fn()
    render(
      <ModalWithHoc isOpen={true} onClose={onClose} title="Titulo">
        Contenido
      </ModalWithHoc>,
    )

    fireEvent.keyDown(window, { key: 'Enter' })

    expect(onClose).not.toHaveBeenCalled()
  })
})
