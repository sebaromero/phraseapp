import { useForm } from 'react-hook-form'
import { usePhraseStore } from '../../../../store/phraseStore'

interface IFormData {
  text: string
  author?: string
}

const useAddPhraseForm = (onClose: VoidFunction) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>()

  const { addPhrase } = usePhraseStore()

  const onSubmit = (data: { text: string; author?: string }) => {
    addPhrase(data.text, data.author)
    reset()
    onClose()
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  return { errors, register, handleSubmit, onSubmit, handleClose }
}

export default useAddPhraseForm
