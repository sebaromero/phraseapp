import { create } from 'zustand'
import { IPhrase } from '../core/Phrase/phrase'
import { IPhraseState } from '../core/Phrase/phraseState'

export const usePhraseStore = create<IPhraseState>((set) => ({
  phrases: [],
  isLoading: false,
  deletingIds: [],
  searchQuery: '',

  addPhrase: (text, author) => {
    const newPhrase: IPhrase = { id: crypto.randomUUID(), text, author }
    set((state) => ({ phrases: [newPhrase, ...state.phrases] }))
  },

  removePhrase: (id) => {
    set((state) => ({
      deletingIds: [...state.deletingIds, id],
    }))

    setTimeout(() => {
      set((state) => ({
        phrases: state.phrases.filter((phrase) => phrase.id !== id),
        deletingIds: state.deletingIds.filter(
          (deletingId) => deletingId !== id,
        ),
      }))
    }, 1000)
  },

  setLoading: (loading) => set(() => ({ isLoading: loading })),
  setSearch: (query) => set(() => ({ searchQuery: query })),
}))
