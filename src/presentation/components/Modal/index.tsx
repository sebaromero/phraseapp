import { ReactNode } from 'react'
import { X } from 'lucide-react'
import ActionButton from '../ActionButton'
import withModal from '../../../hocs/withModal'

interface IModal {
  isOpen: boolean
  onClose: VoidFunction
  title: string
  children: ReactNode
}

const Modal = ({ isOpen, onClose, title, children }: IModal) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-md shadow-lg max-w-md w-full p-4 relative m-2"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
          {title}
        </h2>
        <div className="absolute right-4 top-4">
          <ActionButton
            icon={<X />}
            onClick={onClose}
            ariaLabel="Cerrar modal"
          />
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  )
}

export default withModal(Modal)
