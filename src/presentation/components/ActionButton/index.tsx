import { Loader2 } from 'lucide-react'
import { ReactNode } from 'react'

interface IActionButton {
  ariaLabel?: string
  disabled?: boolean
  icon: ReactNode
  onClick: VoidFunction
  title?: string
  text?: string
}

const ActionButton = ({
  ariaLabel = 'Ejecutar acción',
  disabled = false,
  icon,
  onClick,
  title,
  text,
}: IActionButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      title={title || ariaLabel}
      disabled={disabled}
      className="border-gray-300 border-1 flex gap-2 rounded p-2 bg-gray-100 hover:bg-gray-200"
    >
      {disabled ? <Loader2 className="animate-spin" /> : icon}
      {text && <span>{text}</span>}
    </button>
  )
}

export default ActionButton
