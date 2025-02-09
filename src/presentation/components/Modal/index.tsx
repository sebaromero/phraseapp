import { ReactNode } from 'react'
import { X } from 'lucide-react'
import useModal from '../../../hooks/useModal'
import ActionButton from '../ActionButton'

interface IModal {
  isOpen: boolean
  onClose: VoidFunction
  title: string
  children: ReactNode
}

const Modal = ({ isOpen, onClose, title, children }: IModal) => {
  useModal(isOpen, onClose)

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="modal-title"
          className="text-xl font-semibold text-gray-900 dark:text-white"
        >
          {title}
        </h2>
        <ActionButton icon={<X />} onClick={onClose} ariaLabel="Cerrar modal" />
        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}

export default Modal
