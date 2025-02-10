import { IPhrase } from '../../core/Phrase/phrase'
import filterPhrases from '../../presentation/containers/PhraseList/utils/filterPhrases'

describe('filterPhrases', () => {
  const phrases: IPhrase[] = [
    {
      id: '1',
      text: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.',
      author: 'John Lennon',
      color: 'rgba(255, 0, 0, 0.2)',
    },
    {
      id: '2',
      text: 'Ser o no ser, esa es la cuestión.',
      author: 'William Shakespeare',
      color: 'rgba(0, 0, 255, 0.2)',
    },
    {
      id: '3',
      text: 'No hay camino para la paz, la paz es el camino.',
      author: 'Mahatma Gandhi',
      color: 'rgba(0, 255, 0, 0.2)',
    },
    {
      id: '4',
      text: 'La única manera de hacer un gran trabajo es amar lo que haces.',
      author: 'Steve Jobs',
      color: 'rgba(255, 255, 0, 0.2)',
    },
    {
      id: '5',
      text: 'La imaginación es más importante que el conocimiento.',
      author: 'Albert Einstein',
      color: 'rgba(255, 165, 0, 0.2)',
    },
    {
      id: '6',
      text: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.',
      author: 'Robert Collier',
      color: 'rgba(128, 0, 128, 0.2)',
    },
  ]

  it('should return all phrases if query is empty', () => {
    const result = filterPhrases(phrases, '')
    expect(result).toEqual(phrases)
  })

  it('should filter phrases by text', () => {
    const result = filterPhrases(phrases, 'trabajo')
    expect(result).toEqual([
      {
        id: '4',
        text: 'La única manera de hacer un gran trabajo es amar lo que haces.',
        author: 'Steve Jobs',
        color: 'rgba(255, 255, 0, 0.2)',
      },
    ])
  })

  it('should filter phrases by author', () => {
    const result = filterPhrases(phrases, 'Einstein')
    expect(result).toEqual([
      {
        id: '5',
        text: 'La imaginación es más importante que el conocimiento.',
        author: 'Albert Einstein',
        color: 'rgba(255, 165, 0, 0.2)',
      },
    ])
  })

  it('should return an empty array if no phrases match the query', () => {
    const result = filterPhrases(phrases, 'tecnología')
    expect(result).toEqual([])
  })

  it('should filter phrases by both text and author', () => {
    const result = filterPhrases(phrases, 'trabajo Steve')
    expect(result).toEqual([
      {
        id: '4',
        text: 'La única manera de hacer un gran trabajo es amar lo que haces.',
        author: 'Steve Jobs',
        color: 'rgba(255, 255, 0, 0.2)',
      },
    ])
  })
})
