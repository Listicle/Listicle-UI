describe('User flow Listicle app (from dashboard view)', () => {

  beforeEach( () => {
    cy.visit('http://localhost:3000');
  });

  it('Should greet the user with a welcome message', () => {
    cy.get('.text-5xl')
      .should('have.text', 'Welcome to Listicle')
  })

  it.skip('Should display the newest project board, if one exists', () => {
    cy.get('#addNewProjectBtn')
      .click()
    cy.get('#addNewProjectInput')
      .should('exist')
  })

  it('Should be able to create a new project board', () => {
    cy.get('#addNewProjectBtn')
      .click()
    cy.get('#addNewProjectInput')
      .should('exist')
  })

  it('Should be able to delete any displayed project board', () => {
    cy.get(':nth-child(3) > button')
      .click()
    cy.get(':nth-child(3) > a > p')
      .should('not.exist')
  })
})

describe('Project board functionality (from project board view)', () => {

  beforeEach( () => {
    cy.visit('http://localhost:3000');
    cy.get('#addNewProjectBtn')
      .click()
    cy.get(':nth-child(1) > a > p')
      .click()
    cy.get('new PB ele')
      .children('create new task btn')
      .click()
    cy.get('new PB')
      .type('name of PB')
    cy.get('the form')
      .submit()
    cy.get('create new task btn')
      .click()
    cy.get('new task creator input')
      .type('task name')
    cy.get('the form')
      .submit()
  })

  it.skip('Should be able to create a new task', () => {
    cy.get('new task')
      .should('exist')
  })

  it.skip('Should be able to delete a task', () => {
    cy.get('delete task btn')
      .click()
    cy.get('previously created task')
      .should('not.exist')
  })

  it.skip('Should be able to mark any task as complete', () => {
    cy.get('a checkbox')
      .should('not.be.visible')
      .check({ force: true })
      .should('be.checked')
  })

  it.skip('Should be able to mark any task as incomplete', () => {
    cy.get('a checkbox')
      .should('not.be.visible')
      .check({ force: true })
      .should('be.checked')
    cy.get('a checkbox')
      .should('not.be.visible')
      .check({ force: true })
      .should('not.be.checked')
  })

  it.skip('Should be able to delete any activity within a project board', () => {

  })
})
