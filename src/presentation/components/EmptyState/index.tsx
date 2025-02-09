import { BookOpenText } from 'lucide-react'

const EmptyState = () => {
  return (
    <section role="status" aria-live="polite">
      <figure
        aria-labelledby="empty-state-message"
        className="flex flex-col items-center justify-center text-center py-8"
      >
        <BookOpenText className="w-12 h-12 text-gray-400" aria-hidden="true" />
        <figcaption id="empty-state-message" className="text-gray-500 mt-2">
          No hay frases aún. Agrega una para empezar.
        </figcaption>
      </figure>
    </section>
  )
}

export default EmptyState
