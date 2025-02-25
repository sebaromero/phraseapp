describe('delete phrase', () => {
  it('should create and delete a phrase from the list', () => {
    const phraseToAdd = 'Cada día sabemos más y entendemos menos'
    const author = 'Albert Einstein'

    cy.visit('/')

    cy.get('[aria-label="Agregar frase"]').click()

    cy.get('input[name="text"]').type(phraseToAdd)

    cy.get('input[name="author"]').type(author)

    cy.get('button[type="submit"]').click()

    cy.get('[data-testid="phrase-list"]').should('contain', phraseToAdd)

    cy.get('[aria-label="Eliminar frase"]').first().click()

    cy.get('[aria-labelledby="empty-state-message"]').should(
      'not.contain',
      phraseToAdd,
    )
  })
})
