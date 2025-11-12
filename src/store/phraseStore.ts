import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { IPhrase } from '../core/Phrase/phrase'
import { IPhraseState } from '../core/Phrase/phraseState'
import getRandomColor from '../utils/getRandomColor'

export const usePhraseStore = create<IPhraseState>()(
  persist(
    (set) => ({
      phrases: [],
      deletingIds: [],
      searchQuery: '',

      addPhrase: (text, author) => {
        const newPhrase: IPhrase = {
          id: uuidv4(),
          text,
          author,
          color: getRandomColor(),
        }
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

      setSearch: (query) => set(() => ({ searchQuery: query })),
    }),
    {
      name: 'phrases-storage',
      partialize: (state) => ({
        phrases: state.phrases,
      }),
    },
  ),
)
