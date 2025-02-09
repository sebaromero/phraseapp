import { usePhraseStore } from '../../store/phraseStore'
import PhraseList from '../containers/PhraseList'

function App() {
  const { phrases, isLoading, deletingIds, addPhrase, removePhrase } =
    usePhraseStore()

  return (
    <>
      <PhraseList
        phrases={phrases}
        isLoading={isLoading}
        onDelete={removePhrase}
        isDeleting={deletingIds}
      />
    </>
  )
}

export default App
