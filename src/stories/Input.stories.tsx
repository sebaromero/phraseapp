import type { Meta, StoryObj } from '@storybook/react'
import Input from '../presentation/components/Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onChangeValue: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    id: 'default-input',
    label: 'Nombre',
    placeholder: 'Ingrese su nombre...',
  },
}

export const WithDescription: Story = {
  args: {
    id: 'input-desc',
    label: 'Descripción',
    placeholder: 'Ingresa texto...',
    description: 'Esto es un helper text',
  },
}

export const Search: Story = {
  args: {
    id: 'search-input',
    label: 'Buscar',
    placeholder: 'Buscar frases...',
    type: 'search',
    role: 'searchbox',
  },
}

export const Email: Story = {
  args: {
    id: 'email-input',
    label: 'Email',
    placeholder: 'Ingrese su email...',
    type: 'email',
  },
}

export const Disabled: Story = {
  args: {
    id: 'disabled-input',
    label: 'Campo deshabilitado',
    placeholder: 'No puedes ingresar ningun valor',
    disabled: true,
  },
}
