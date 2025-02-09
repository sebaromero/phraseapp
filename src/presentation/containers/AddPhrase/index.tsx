import { useForm } from 'react-hook-form'
import { Plus } from 'lucide-react'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import Modal from '../../components/Modal'

interface IAddPhrase {
  isOpen: boolean
  onClose: VoidFunction
  onAdd: (text: string, author?: string) => void
}

interface IFormData {
  text: string
  author?: string
}

const AddPhrase = ({ isOpen, onClose, onAdd }: IAddPhrase) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>()

  const onSubmit = (data: { text: string; author?: string }) => {
    onAdd(data.text, data.author)
    reset()
    onClose()
  }

  const handleClose = () => {
    reset()
    onClose()
  }

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
