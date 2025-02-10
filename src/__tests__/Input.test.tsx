import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from '../presentation/components/Input'

describe('Input', () => {
  it('renders correctly with label', () => {
    render(<Input id="test-input" label="Nombre" onChange={jest.fn()} />)

    expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
  })

  it('displays placeholder text', () => {
    render(
      <Input
        id="test-input"
        label="Nombre"
        placeholder="Ingrese su nombre..."
        onChange={jest.fn()}
      />,
    )

    expect(
      screen.getByPlaceholderText('Ingrese su nombre...'),
    ).toBeInTheDocument()
  })

  it('calls onChange when typing', () => {
    const handleChange = jest.fn()
    render(<Input id="test-input" label="Nombre" onChange={handleChange} />)

    const input = screen.getByLabelText('Nombre')
    fireEvent.change(input, { target: { value: 'Marcelo' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'Marcelo' }),
      }),
    )
  })

  it('renders description when provided', () => {
    render(
      <Input
        id="test-input"
        label="Contraseña"
        description="Debe ser de u minimo de 8 caracteres"
        onChange={jest.fn()}
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
        onChange={jest.fn()}
      />,
    )

    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')
  })

  it('renders an error message when error state be true', () => {
    render(
      <Input
        id="email-input"
        label="Email"
        type="email"
        onChange={jest.fn()}
        error="Este campo es obligatorio"
      />,
    )

    expect(screen.getByText('Este campo es obligatorio')).toBeInTheDocument()
  })
})
