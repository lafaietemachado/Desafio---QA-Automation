import 'cypress-file-upload'
import 'cypress-mochawesome-reporter/register'
import './commands.js'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

beforeEach(() => {
  cy.clearCookies()
  cy.clearLocalStorage()
})
