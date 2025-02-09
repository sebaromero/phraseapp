import { useState } from 'react'
import { usePhraseStore } from '../../store/phraseStore'
import AddPhrase from '../containers/AddPhrase'
import Header from '../containers/Header'
import PhraseList from '../containers/PhraseList'
import Layout from '../layouts/Layout'

function App() {
  const [open, setOpen] = useState(false)

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
          onAddPhrase={() => setOpen(true)}
          onSearchChange={setSearch}
        />
        <PhraseList
          phrases={phrases}
          isLoading={isLoading}
          onDelete={removePhrase}
          isDeleting={deletingIds}
        />
        <AddPhrase
          isOpen={open}
          onClose={() => setOpen(false)}
          onAdd={addPhrase}
        />
      </div>
    </Layout>
  )
}

export default App
