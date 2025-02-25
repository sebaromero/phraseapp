import { memo } from 'react'
import { BookOpenText, SearchX } from 'lucide-react'
import { usePhraseStore } from '../../../store/phraseStore'
import PhraseCard from '../../components/PhraseCard'
import EmptyState from '../../components/EmptyState'
import filterPhrases from './utils/filterPhrases'
import { IPhrase } from '../../../core/Phrase/phrase'

interface IPhraseList {
  phrases: IPhrase[]
  searchQuery: string
}

const PhraseList = ({ phrases, searchQuery }: IPhraseList) => {
  const { deletingIds, removePhrase } = usePhraseStore()
  const filteredPhrases = filterPhrases(phrases, searchQuery)

  if (!phrases.length) {
    return (
      <EmptyState
        icon={
          <BookOpenText
            className="w-12 h-12 text-gray-400"
            aria-hidden="true"
          />
        }
        text="Aún no hay frases. Agrega una para comenzar."
      />
    )
  }

  if (!filteredPhrases.length) {
    return (
      <EmptyState
        icon={
          <SearchX className="w-12 h-12 text-gray-400" aria-hidden="true" />
        }
        text="No se encontraron resultados para tu búsqueda."
      />
    )
  }

  return (
    <section
      className="w-full mx-auto"
      aria-live="polite"
      data-testid="phrase-list"
    >
      <div className="grid gap-4">
        {filteredPhrases.map((phrase) => (
          <PhraseCard
            key={phrase.id}
            text={phrase.text}
            author={phrase.author}
            color={phrase.color}
            onDelete={() => removePhrase(phrase.id)}
            isDeleting={deletingIds?.includes(phrase.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default memo(PhraseList)
