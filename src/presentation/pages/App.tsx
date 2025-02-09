import { usePhraseStore } from '../../store/phraseStore'
import AddPhrase from '../containers/AddPhrase'
import Header from '../containers/Header'
import PhraseList from '../containers/PhraseList'
import Layout from '../layouts/Layout'
import { useModal } from '../../hooks/useModal'

function App() {
  const { isOpen, openModal, closeModal } = useModal()

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
    <Layout>
      <div className="flex flex-col gap-6">
        <Header
          searchValue={searchQuery}
          onAddPhrase={openModal}
          onSearchChange={setSearch}
        />
        <PhraseList
          phrases={phrases}
          isLoading={isLoading}
          onDelete={removePhrase}
          isDeleting={deletingIds}
        />
        <AddPhrase isOpen={isOpen} onClose={closeModal} onAdd={addPhrase} />
      </div>
    </Layout>
  )
}

export default App
