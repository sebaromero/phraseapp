import { Trash2 } from 'lucide-react'
import ActionButton from '../ActionButton'

interface IPhraseCard {
  author?: string | null
  isDeleting: boolean
  onDelete: VoidFunction
  text: string
  color: string
}

const PhraseCard = ({
  author,
  isDeleting,
  text,
  color,
  onDelete,
}: IPhraseCard) => {
  return (
    <div
      role="article"
      className="relative p-4 rounded-md border border-gray-300"
      style={{ backgroundColor: color }}
    >
      <p className="text-xl font-semibold text-gray-900">&quot;{text}&quot;</p>
      <p className="mt-2 text-md text-gray-500">- {author || 'Anónimo'}</p>
      <div className="absolute top-2 right-2">
        <ActionButton
          ariaLabel="Eliminar frase"
          disabled={isDeleting}
          icon={<Trash2 />}
          onClick={onDelete}
          type="button"
        />
      </div>
    </div>
  )
}
export default PhraseCard
