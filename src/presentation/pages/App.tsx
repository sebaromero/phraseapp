import AddPhrase from '../containers/AddPhrase'
import Header from '../containers/Header'
import PhraseList from '../containers/PhraseList'
import Layout from '../layouts/Layout'
import ErrorBoundary from '../layouts/ErrorBundary/ErrorBoundary'
import { useModal } from '../../hooks/useModal'
import { usePhraseStore } from '../../store/phraseStore'

const App = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const { phrases, searchQuery } = usePhraseStore()

  return (
    <Layout>
      <ErrorBoundary>
        <div className="flex flex-col gap-6">
          <Header onAddPhrase={openModal} searchQuery={searchQuery} />
          <PhraseList phrases={phrases} searchQuery={searchQuery} />
          <AddPhrase isOpen={isOpen} onClose={closeModal} />
        </div>
      </ErrorBoundary>
    </Layout>
  )
}

export default App
