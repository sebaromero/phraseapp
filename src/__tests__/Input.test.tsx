import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from '../presentation/components/Input'

describe('Input', () => {
  it('renders correctly with label', () => {
    render(<Input id="test-input" label="Nombre" onChangeValue={jest.fn()} />)

    expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
  })

  it('displays placeholder text', () => {
    render(
      <Input
        id="test-input"
        label="Nombre"
        placeholder="Ingrese su nombre..."
        onChangeValue={jest.fn()}
      />,
    )

    expect(
      screen.getByPlaceholderText('Ingrese su nombre...'),
    ).toBeInTheDocument()
  })

  it('calls onChangeValue when typing', () => {
    const handleChange = jest.fn()
    render(
      <Input id="test-input" label="Nombre" onChangeValue={handleChange} />,
    )

    const input = screen.getByLabelText('Nombre')
    fireEvent.change(input, { target: { value: 'Marcelo' } })

    expect(handleChange).toHaveBeenCalledWith('Marcelo')
  })

  it('renders description when provided', () => {
    render(
      <Input
        id="test-input"
        label="Contraseña"
        description="Debe ser de u minimo de 8 caracteres"
        onChangeValue={jest.fn()}
      />,
    )

    expect(
      screen.getByText('Debe ser de u minimo de 8 caracteres'),
    ).toBeInTheDocument()
  })

  it('supports different input types', () => {
    render(
      <Input
        id="email-input"
        label="Email"
        type="email"
        onChangeValue={jest.fn()}
      />,
    )

    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')
  })
})
