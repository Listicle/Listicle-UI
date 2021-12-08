describe('User flow Listicle app (from dashboard view)', () => {

  beforeEach( () => {
    cy.visit('http://localhost:3000');
  });

  it('Should greet the user with a welcome message', () => {
    cy.get('welcome text')
      .should('have.text', '')
  })

  it('Should display the newest project board, if one exists', () => {
    cy.get('create new ele btn')
      .click()
    cy.get('new PB ele')
      .should('exist')
  })

  it('Should be able to create a new project board', () => {
    cy.get('create new project board btn (on dashboard)')
      .click()
    cy.get('new PB')
      .should('exist')
  })

  it('Should be able to delete any displayed project board', () => {
    cy.get('create new project board btn (on dashboard)')
      .click()
    cy.get('new PB')
      .type('name of PB')
    cy.get('the form')
      .submit()
  })
})

describe('Project board functionality (from project board view)', () => {

  beforeEach( () => {
    cy.visit('http://localhost:3000');
    cy.get('create new project board btn (on dashboard)')
      .click()
    cy.get('navigate to project view btn')
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

  it('Should be able to create a new task', () => {
    cy.get('new task')
      .should('exist')
  })

  it('Should be able to delete a task', () => {
    cy.get('delete task btn')
      .click()
    cy.get('previously created task')
      .should('not.exist')
  })

  it('Should be able to mark any task as complete', () => {
    cy.get('a checkbox')
      .should('not.be.visible')
      .check({ force: true })
      .should('be.checked')
  })

  it('Should be able to mark any task as incomplete', () => {
    cy.get('a checkbox')
      .should('not.be.visible')
      .check({ force: true })
      .should('be.checked')
    cy.get('a checkbox')
      .should('not.be.visible')
      .check({ force: true })
      .should('not.be.checked')
  })

  it('Should be able to delete any activity within a project board', () => {
    
  })
})
