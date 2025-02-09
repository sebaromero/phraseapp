import { Trash2 } from 'lucide-react'
import ActionButton from '../ActionButton'

interface IPhraseCard {
  author?: string | null
  isDeleting: boolean
  onDelete: VoidFunction
  text: string
}

const PhraseCard = ({ author, isDeleting, text, onDelete }: IPhraseCard) => {
  return (
    <div
      role="article"
      className="relative p-4 rounded-md border border-gray-300 shadow-md bg-white"
    >
      <p className="text-lg font-semibold text-gray-900">"{text}"</p>
      <p className="mt-2 text-sm text-gray-500">- {author || 'Anónimo'}</p>
      <div className="absolute top-2 right-2">
        <ActionButton
          icon={<Trash2 />}
          onClick={onDelete}
          ariaLabel="Eliminar frase"
          disabled={isDeleting}
        />
      </div>
    </div>
  )
}
export default PhraseCard
