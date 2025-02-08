import { Trash2 } from 'lucide-react'
import ActionButton from '../ActionButton'

interface PhraseCardProps {
  text: string
  author?: string | null
  onDelete: VoidFunction
}

const PhraseCard = ({ text, author, onDelete }: PhraseCardProps) => {
  return (
    <div
      role="article"
      className="relative p-4 rounded-lg border border-gray-300 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800"
    >
      <p className="text-lg font-semibold text-gray-900 dark:text-white">
        "{text}"
      </p>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        - {author || 'Anónimo'}
      </p>
      <div className="absolute top-2 right-2">
        <ActionButton
          icon={<Trash2 />}
          onClick={onDelete}
          ariaLabel="Eliminar frase"
        />
      </div>
    </div>
  )
}
export default PhraseCard
