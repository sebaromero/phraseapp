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
      {icon}
    </button>
  )
}

export default ActionButton
