describe('create a new phrase', () => {
  it('should create a new phrase and display it in the list', () => {
    const newPhrase = 'Haz el amor y no la guerra'
    const newAuthor = 'John Lennon'

    cy.visit('/')

    cy.get('[aria-label="Agregar frase"]').click()

    cy.get('input[name="text"]').type(newPhrase)
    cy.get('input[name="author"]').type(newAuthor)

    cy.get('button[type="submit"]').click()

    cy.get('[data-testid="phrase-list"]').should('contain', newPhrase)
    cy.get('[data-testid="phrase-list"]').should('contain', newAuthor)
  })
})
