import { memo } from 'react'
import { Plus } from 'lucide-react'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import { usePhraseStore } from '../../../store/phraseStore'

interface IHeader {
  onAddPhrase: VoidFunction
}

const Header = ({ onAddPhrase }: IHeader) => {
  const { searchQuery, setSearch } = usePhraseStore()

  return (
    <header className="w-full flex items-center gap-2 p-4 border rounded-md border-gray-300 bg-white">
      <Input
        id="search-phrases"
        label="Buscar frases"
        placeholder="Escribe para buscar..."
        value={searchQuery}
        onChange={(e) => setSearch(e.target.value)}
        role="searchbox"
      />
      <div className="flex self-end w-auto">
        <ActionButton
          ariaLabel="Agregar frase"
          icon={<Plus />}
          onClick={onAddPhrase}
          text="Agregar"
          title="Agregar frase"
        />
      </div>
    </header>
  )
}

export default memo(Header)
