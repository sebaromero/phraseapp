import { memo } from 'react'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import { Plus } from 'lucide-react'

interface IHeader {
  searchValue: string
  onSearchChange: (value: string) => void
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
        onChangeValue={onSearchChange}
        role="searchbox"
      />
      <div className="flex self-end w-auto">
        <ActionButton
          ariaLabel="Agregar frase"
          title="Agregar frase"
          icon={<Plus />}
          onClick={onAddPhrase}
          text="Agregar"
        />
      </div>
    </header>
  )
}

export default memo(Header)
