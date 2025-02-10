import type { Meta, StoryObj } from '@storybook/react'
import Modal from '../presentation/components/Modal'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    onClose: { action: 'closed' },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Título del Modal',
    children: <p>Este es el contenido del modal.</p>,
  },
}
