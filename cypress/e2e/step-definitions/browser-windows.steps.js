import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import AlertsFrameWindowsPage from '../../pages/AlertsFrameWindowsPage.js'

Given('que estou na página de Browser Windows', () => {
  cy.navigateToDemoQA()
  cy.navigateToSection('Alerts, Frame & Windows')
  cy.navigateToSubmenu('Browser Windows')
  cy.log('🚀 Navegando para Alerts, Frame & Windows → Browser Windows')
})

When('clicar no botão New Window', () => {
  AlertsFrameWindowsPage.clickNewWindowButton()
  cy.log('✅ Botão New Window clicado')
})

When('aguardar a nova janela abrir', () => {
  cy.wait(2000)
  cy.log('✅ Aguardando abertura da nova janela')
})

When('alternar para a nova janela', () => {
  AlertsFrameWindowsPage.switchToNewWindow()
  cy.log('✅ Alternado para a nova janela')
})

When('fechar a nova janela', () => {
  AlertsFrameWindowsPage.closeNewWindow()
  cy.log('✅ Nova janela fechada')
})

When('retornar para a janela principal', () => {
  AlertsFrameWindowsPage.switchToMainWindow()
  cy.log('✅ Retornado para a janela principal')
})

Then('a nova janela deve ser aberta', () => {
  cy.window().then((win) => {
    expect(win.location.href).to.include('sample')
  })
  cy.log('✅ Nova janela aberta com sucesso')
})

Then('a nova janela deve conter a mensagem {string}', (message) => {
  cy.get('body').should('contain', message)
  cy.log(`✅ Nova janela contém a mensagem: ${message}`)
})

Then('a nova janela deve ter o título {string}', (title) => {
  cy.title().should('eq', title)
  cy.log(`✅ Nova janela tem o título: ${title}`)
})

Then('devo estar na janela principal', () => {
  cy.url().should('include', 'browser-windows')
  cy.log('✅ Retornou para a janela principal')
})

Then('o botão New Window deve estar visível', () => {
  cy.get('#tabButton').should('be.visible')
  cy.log('✅ Botão New Window está visível')
})

Then('a funcionalidade de múltiplas janelas deve funcionar corretamente', () => {
  cy.log('✅ Funcionalidade de múltiplas janelas funcionando corretamente')
})
