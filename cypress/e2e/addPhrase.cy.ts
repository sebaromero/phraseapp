describe('create a new phrase', () => {
  it('should create a new phrase and display it in the list', () => {
    const newPhrase = 'La tecnología es asombrosa'
    const newAuthor = 'Juan Pérez'

    // Visita la página principal
    cy.visit('/')

    // Abre el modal para agregar una nueva frase
    cy.get('[aria-label="Agregar frase"]').click()

    // Completa el formulario
    cy.get('input[name="text"]').type(newPhrase)
    cy.get('input[name="author"]').type(newAuthor)

    // Envía el formulario
    cy.get('button[type="submit"]').click()

    // Verifica que la frase se haya agregado correctamente a la lista
    cy.get('[data-testid="phrase-list"]').should('contain', newPhrase)
    cy.get('[data-testid="phrase-list"]').should('contain', newAuthor)
  })
})
