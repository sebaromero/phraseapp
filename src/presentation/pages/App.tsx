import { usePhraseStore } from '../../store/phraseStore'
import AddPhrase from '../containers/AddPhrase'
import Header from '../containers/Header'
import PhraseList from '../containers/PhraseList'
import Layout from '../layouts/Layout'
import { useModal } from '../../hooks/useModal'

function App() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <Header onAddPhrase={openModal} />
        <PhraseList />
        <AddPhrase isOpen={isOpen} onClose={closeModal} />
      </div>
    </Layout>
  )
}

export default App
