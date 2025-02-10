describe('filter phrases', () => {
  it('should filter phrases by search query', () => {
    const phrase1 = 'La innovación es clave'
    const phrase2 = 'El futuro es prometedor'
    const phrase3 = 'La tecnología avanza rápido'

    cy.visit('/')

    cy.get('[aria-label="Agregar frase"]').click()
    cy.get('input[name="text"]').type(phrase1)
    cy.get('input[name="author"]').type('Autor 1')
    cy.get('button[type="submit"]').click()

    cy.get('[aria-label="Agregar frase"]').click()
    cy.get('input[name="text"]').type(phrase2)
    cy.get('input[name="author"]').type('Autor 2')
    cy.get('button[type="submit"]').click()

    cy.get('[aria-label="Agregar frase"]').click()
    cy.get('input[name="text"]').type(phrase3)
    cy.get('input[name="author"]').type('Autor 3')
    cy.get('button[type="submit"]').click()

    cy.get('[aria-label="Buscar frases"]').type('innovación')

    cy.get('[data-testid="phrase-list"]').should('contain', phrase1)
    cy.get('[data-testid="phrase-list"]').should('not.contain', phrase2)
    cy.get('[data-testid="phrase-list"]').should('not.contain', phrase3)
  })
})
