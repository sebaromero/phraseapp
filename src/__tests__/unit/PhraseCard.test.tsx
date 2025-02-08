import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PhraseCard from '../../presentation/components/PhraseCard'

describe('PhraseCard', () => {
  it('Render phrase and author correctly', () => {
    render(
      <PhraseCard
        text="La vida es bella"
        author="Charlie Chaplin"
        onDelete={() => {}}
      />,
    )

    expect(screen.getByText('"La vida es bella"')).toBeInTheDocument()
    expect(screen.getByText('- Charlie Chaplin')).toBeInTheDocument()
  })

  it('Show "Anónimo" when author is null', () => {
    render(
      <PhraseCard
        text="La inspiración existe, pero tiene que encontrarte trabajando."
        author={null}
        onDelete={() => {}}
      />,
    )

    expect(
      screen.getByText(
        '"La inspiración existe, pero tiene que encontrarte trabajando."',
      ),
    ).toBeInTheDocument()
    expect(screen.getByText('- Anónimo')).toBeInTheDocument()
  })

  it('Show "Anónimo" when the phrase has not author', () => {
    render(<PhraseCard text="Solo sé que no sé nada." onDelete={() => {}} />)

    expect(screen.getByText('"Solo sé que no sé nada."')).toBeInTheDocument()
    expect(screen.getByText('- Anónimo')).toBeInTheDocument()
  })

  it('Delete card when delete button is clicked', () => {
    const onDeleteMock = jest.fn()
    render(
      <PhraseCard
        text="No se trata de vivir para siempre, sino de crear algo que si lo haga"
        author="Andy Warhol"
        onDelete={onDeleteMock}
      />,
    )

    const deleteButton = screen.getByRole('button', { name: 'Eliminar frase' })
    fireEvent.click(deleteButton)

    expect(onDeleteMock).toHaveBeenCalledTimes(1)
  })
})
