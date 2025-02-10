import filterPhrases from '../../presentation/containers/PhraseList/utils/filterPhrases'
import { mockPhrases } from '../../constants/mockPhrases'

describe('filterPhrases', () => {
  it('should return all phrases if query is empty', () => {
    const result = filterPhrases(mockPhrases, '')
    expect(result).toEqual(mockPhrases)
  })

  it('should filter phrases by text', () => {
    const result = filterPhrases(mockPhrases, 'trabajo')
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
    const result = filterPhrases(mockPhrases, 'Einstein')
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
    const result = filterPhrases(mockPhrases, 'tecnología')
    expect(result).toEqual([])
  })

  it('should filter phrases by both text and author', () => {
    const result = filterPhrases(mockPhrases, 'trabajo Steve')
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
