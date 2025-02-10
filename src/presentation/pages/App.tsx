import AddPhrase from '../containers/AddPhrase'
import Header from '../containers/Header'
import PhraseList from '../containers/PhraseList'
import Layout from '../layouts/Layout'
import { useModal } from '../../hooks/useModal'
import { usePhraseStore } from '../../store/phraseStore'

function App() {
  const { isOpen, openModal, closeModal } = useModal()
  const { phrases, searchQuery } = usePhraseStore()

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <Header onAddPhrase={openModal} searchQuery={searchQuery} />
        <PhraseList phrases={phrases} searchQuery={searchQuery} />
        <AddPhrase isOpen={isOpen} onClose={closeModal} />
      </div>
    </Layout>
  )
}

export default App
