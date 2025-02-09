import { memo } from 'react'
import PhraseCard from '../../components/PhraseCard'
import EmptyState from '../../components/EmptyState'
import filterPhrases from '../../../utils/filterPhrases'
import { usePhraseStore } from '../../../store/phraseStore'

const PhraseList = () => {
  const { phrases, deletingIds, searchQuery, removePhrase } = usePhraseStore()
  const filteredPhrases = filterPhrases(phrases, searchQuery)

  if (!phrases.length) {
    return <EmptyState />
  }

  if (!filteredPhrases.length) {
    return (
      <div className="text-center text-gray-500 mt-6">
        <p>No se encontraron resultados para tu búsqueda.</p>
      </div>
    )
  }

  return (
    <section className="w-full mx-auto" aria-live="polite">
      <div className="grid gap-4">
        {filteredPhrases.map((phrase) => (
          <PhraseCard
            key={phrase.id}
            text={phrase.text}
            author={phrase.author}
            onDelete={() => removePhrase(phrase.id)}
            isDeleting={deletingIds?.includes(phrase.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default memo(PhraseList)
