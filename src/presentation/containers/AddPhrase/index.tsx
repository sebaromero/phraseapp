import { Plus } from 'lucide-react'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import Modal from '../../components/Modal'
import useAddPhraseForm from './hooks/useAddPhraseForm'

interface IAddPhrase {
  isOpen: boolean
  onClose: VoidFunction
}

const AddPhrase = ({ isOpen, onClose }: IAddPhrase) => {
  const { errors, register, handleSubmit, onSubmit, handleClose } =
    useAddPhraseForm(onClose)

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Agregar nueva frase">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Frase"
          placeholder="Escribe una nueva frase"
          {...register('text', { required: 'La frase es obligatoria.' })}
          error={errors?.text?.message}
        />
        <Input
          label="Autor"
          placeholder="Autor (opcional)"
          aria-label="Autor"
          description='Si no agregas un autor, se mostrará como "Anónimo"'
          {...register('author')}
        />
        <div className="flex justify-end">
          <ActionButton
            icon={<Plus />}
            ariaLabel="Agregar frase"
            title="Agregar frase"
            text="Agregar frase"
            type="submit"
          />
        </div>
      </form>
    </Modal>
  )
}

export default AddPhrase
