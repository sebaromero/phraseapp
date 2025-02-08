import { Loader2 } from 'lucide-react'
import { ReactNode } from 'react'

interface IActionButton {
  ariaLabel?: string
  disabled?: boolean
  icon: ReactNode
  onClick: VoidFunction
  title?: string
}

const ActionButton = ({
  ariaLabel = 'Ejecutar acción',
  disabled = false,
  icon,
  onClick,
  title,
}: IActionButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      title={title || ariaLabel}
      disabled={disabled}
    >
      {disabled ? <Loader2 className="animate-spin" /> : icon}
    </button>
  )
}

export default ActionButton
