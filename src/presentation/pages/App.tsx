import { usePhraseStore } from '../../store/phraseStore'
import AddPhrase from '../containers/AddPhrase'
import Header from '../containers/Header'
import PhraseList from '../containers/PhraseList'

function App() {
  const {
    phrases,
    isLoading,
    deletingIds,
    searchQuery,
    addPhrase,
    removePhrase,
    setSearch,
  } = usePhraseStore()

  return (
    <>
      <Header
        searchValue={searchQuery}
        onAddPhrase={addPhrase}
        onSearchChange={setSearch}
      />
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
