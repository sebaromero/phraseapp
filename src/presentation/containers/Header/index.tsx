import { memo, useCallback } from 'react'
import { Plus } from 'lucide-react'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import { usePhraseStore } from '../../../store/phraseStore'

interface IHeader {
  onAddPhrase: VoidFunction
  searchQuery: string
}

const Header = ({ onAddPhrase, searchQuery }: IHeader) => {
  const setSearch = usePhraseStore((state) => state.setSearch)

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    [setSearch],
  )

  return (
    <header className="w-full flex items-center gap-2 p-4 border rounded-md border-gray-300 bg-white">
      <Input
        id="search-phrases"
        label="Buscar frases"
        placeholder="Escribe para buscar..."
        value={searchQuery}
        onChange={handleSearchChange}
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
