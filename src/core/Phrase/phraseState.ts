import { IPhrase } from './phrase'

export interface IPhraseState {
  phrases: IPhrase[]
  deletingIds: string[]
  searchQuery: string
  addPhrase: (text: string, author?: string) => void
  removePhrase: (id: string) => void
  setSearch: (query: string) => void
}
