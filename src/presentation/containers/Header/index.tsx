import { memo } from 'react'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import { Plus } from 'lucide-react'

interface IHeader {
  searchValue: string
  onSearchChange: (value: string) => void
  onAddPhrase: () => void
}

const Header = ({ searchValue, onSearchChange, onAddPhrase }: IHeader) => {
  return (
    <header className="w-full flex items-center gap-2 p-4 border-b dark:border-gray-700">
      <Input
        id="search-phrases"
        label="Buscar frases"
        placeholder="Escribe para buscar..."
        value={searchValue}
        onChangeValue={onSearchChange}
        role="searchbox"
      />
      <ActionButton
        ariaLabel="Agregar frase"
        title="Agregar frase"
        icon={<Plus />}
        onClick={onAddPhrase}
      />
    </header>
  )
}

export default memo(Header)
