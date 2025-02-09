import { JSX } from 'react'

interface IEmptyState {
  icon: JSX.Element
  text: string
}

const EmptyState = ({ icon, text }: IEmptyState) => {
  return (
    <section role="status" aria-live="polite">
      <figure
        aria-labelledby="empty-state-message"
        className="flex flex-col items-center justify-center text-center py-8"
      >
        {icon}
        <figcaption id="empty-state-message" className="text-gray-500 mt-2">
          {text}
        </figcaption>
      </figure>
    </section>
  )
}

export default EmptyState
