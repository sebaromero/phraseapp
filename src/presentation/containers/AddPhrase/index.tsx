import { useState } from 'react'
import { Plus } from 'lucide-react'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import Modal from '../../components/Modal'

interface IAddPhrase {
  isOpen: boolean
  onClose: VoidFunction
  onAdd: (text: string, author?: string) => void
}

const AddPhrase = ({ isOpen, onClose, onAdd }: IAddPhrase) => {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  const handleAddPhrase = () => {
    if (text.trim()) {
      onAdd(text, author)
      setText('')
      setAuthor('')
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Agregar nueva frase">
      <div className="flex flex-col gap-4">
        <Input
          value={text}
          label=""
          onChangeValue={setText}
          placeholder="Escribe una nueva frase"
          aria-label="Nueva frase"
        />
        <Input
          value={author}
          label=""
          onChangeValue={setAuthor}
          placeholder="Autor (opcional)"
          aria-label="Autor"
        />
        <div className="flex justify-end">
          <ActionButton
            icon={<Plus />}
            onClick={handleAddPhrase}
            ariaLabel="Agregar frase"
            title="Agregar frase"
          />
        </div>
      </div>
    </Modal>
  )
}

export default AddPhrase
