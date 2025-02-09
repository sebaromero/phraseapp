import { IPhrase } from '../core/Phrase/phrase'

const filterPhrases = (phrases: IPhrase[], query: string): IPhrase[] => {
  if (!query.trim()) return phrases

  const lowerQuery = query.toLowerCase()

  return phrases.filter(
    (phrase) =>
      phrase.text.toLowerCase().includes(lowerQuery) ||
      phrase.author?.toLowerCase().includes(lowerQuery),
  )
}
export default filterPhrases
