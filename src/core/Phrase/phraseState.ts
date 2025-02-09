import { IPhrase } from './phrase'

export interface IPhraseState {
  phrases: IPhrase[]
  isLoading: boolean
  deletingIds: string[]
  searchQuery: string
  addPhrase: (text: string, author?: string) => void
  removePhrase: (id: string) => void
  setLoading: (loading: boolean) => void
  setSearch: (query: string) => void
}
