import { memo, useEffect, useState } from 'react'
import PhraseCard from '../../components/PhraseCard'
import Skeleton from '../../components/Skeleton'
import EmptyState from '../../components/EmptyState'
import { IPhrase } from '../../../core/Phrase/phrase'

interface IPhraseList {
  phrases: IPhrase[]
  isLoading: boolean
  onDelete: (id: string) => void
  isDeleting: string[]
}

const PhraseList = ({
  phrases,
  isLoading,
  onDelete,
  isDeleting,
}: IPhraseList) => {
  const [loadingState, setLoadingState] = useState(true)

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setLoadingState(false), 300)
    }
  }, [isLoading])

  if (loadingState) return <Skeleton />

  return (
    <section className="w-full mx-auto" aria-live="polite">
      {phrases.length > 0 ? (
        <div className="grid gap-4">
          {phrases.map((phrase) => (
            <PhraseCard
              key={phrase.id}
              text={phrase.text}
              author={phrase.author}
              onDelete={() => onDelete(phrase.id)}
              isDeleting={isDeleting?.includes(phrase.id)}
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </section>
  )
}

export default memo(PhraseList)
