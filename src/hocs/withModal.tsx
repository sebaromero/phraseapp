import { useEffect } from 'react'

const withModal = <P extends object>(Component: React.ComponentType<P>) => {
  return ({
    isOpen,
    onClose,
    ...props
  }: { isOpen: boolean; onClose: VoidFunction } & P) => {
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }

      if (isOpen) {
        document.body.classList.add('overflow-hidden')
        window.addEventListener('keydown', handleKeyDown)
      } else {
        document.body.classList.remove('overflow-hidden')
      }

      return () => {
        document.body.classList.remove('overflow-hidden')
        window.removeEventListener('keydown', handleKeyDown)
      }
    }, [isOpen, onClose])

    return <Component isOpen={isOpen} onClose={onClose} {...(props as P)} />
  }
}

export default withModal
