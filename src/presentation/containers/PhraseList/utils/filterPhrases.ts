import { IPhrase } from '../../../../core/Phrase/phrase'

const filterPhrases = (phrases: IPhrase[], query: string): IPhrase[] => {
  if (!query.trim()) return phrases

  const lowerQuery = query.toLowerCase()
  const keywords = lowerQuery.split(' ')
  return phrases.filter((phrase) => {
    return keywords.every(
      (keyword) =>
        phrase.text.toLowerCase().includes(keyword) ||
        (phrase.author && phrase.author.toLowerCase().includes(keyword)),
    )
  })
}

export default filterPhrases
