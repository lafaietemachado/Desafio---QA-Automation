import 'cypress-file-upload'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

beforeEach(() => {
  cy.clearCookies()
  cy.clearLocalStorage()
})
