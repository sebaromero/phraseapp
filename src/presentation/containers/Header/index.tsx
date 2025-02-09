import { memo } from 'react'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import { Plus } from 'lucide-react'

interface IHeader {
  searchValue: string
  onSearchChange: VoidFunction
  onAddPhrase: VoidFunction
}

const Header = ({ searchValue, onSearchChange, onAddPhrase }: IHeader) => {
  return (
    <header className="w-full flex items-center gap-2 p-4 border rounded-md border-gray-300 bg-white">
      <Input
        id="search-phrases"
        label="Buscar frases"
        placeholder="Escribe para buscar..."
        value={searchValue}
        onChange={onSearchChange}
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
