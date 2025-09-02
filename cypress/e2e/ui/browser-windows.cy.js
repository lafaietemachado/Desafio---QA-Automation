/// <reference types="cypress" />

import AlertsFrameWindowsPage from '../../pages/AlertsFrameWindowsPage.js'

describe('Browser Windows', () => {
  beforeEach(() => {
    cy.navigateToDemoQA()
  })

  it('Abertura e validação de nova janela do navegador', () => {
    cy.navigateToSection('Alerts, Frame & Windows')
    cy.navigateToSubmenu('Browser Windows')
    cy.clickButton('button:contains("New Window")', 'New Window')
    AlertsFrameWindowsPage.validateNewWindowOpened()
    AlertsFrameWindowsPage.validateSamplePageMessage()
    AlertsFrameWindowsPage.closeNewWindowAndReturn()
    cy.waitAndValidate('button:contains("New Window")', 'Botão New Window')
    cy.waitAndValidate('body', 'Corpo da página')
  })
})
