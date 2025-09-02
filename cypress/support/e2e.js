import 'cypress-file-upload'
import './commands.js'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

beforeEach(() => {
  cy.clearCookies()
  cy.clearLocalStorage()
})
