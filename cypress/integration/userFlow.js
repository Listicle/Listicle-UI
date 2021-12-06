describe('User flow Listicle app', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000');
  });

  it('Should greet the user with a welcome message', () => {
    cy.get('.flex > h1')
    .should('contain', 'Welcome')
  })
})