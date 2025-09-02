import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import ProgressBarPage from '../../pages/ProgressBarPage.js'

Given('que estou na página de Progress Bar', () => {
  cy.navigateToDemoQA()
  cy.navigateToSection('Widgets')
  cy.navigateToSubmenu('Progress Bar')
  cy.log('🚀 Navegando para Widgets → Progress Bar')
})

When('clicar no botão Start', () => {
  ProgressBarPage.clickStartButton()
  cy.log('✅ Botão Start clicado')
})

When('aguardar o progresso chegar próximo aos 25%', () => {
  ProgressBarPage.waitForProgressNear25()
  cy.log('✅ Progresso aguardado próximo aos 25%')
})

When('clicar no botão Stop', () => {
  ProgressBarPage.clickStopButton()
  cy.log('✅ Botão Stop clicado')
})

When('clicar novamente no botão Start', () => {
  ProgressBarPage.clickStartButton()
  cy.log('✅ Botão Start clicado novamente')
})

When('aguardar o progresso chegar a 100%', () => {
  ProgressBarPage.waitForProgress100()
  cy.log('✅ Progresso aguardado até 100%')
})

When('clicar no botão Reset', () => {
  ProgressBarPage.clickResetButton()
  cy.log('✅ Botão Reset clicado')
})

Then('o progresso deve estar em 0%', () => {
  ProgressBarPage.validateProgress(0)
  cy.log('✅ Progresso está em 0%')
})

Then('o progresso deve estar próximo aos 25%', () => {
  ProgressBarPage.validateProgressNear25()
  cy.log('✅ Progresso está próximo aos 25%')
})

Then('o progresso deve estar em 100%', () => {
  ProgressBarPage.validateProgress(100)
  cy.log('✅ Progresso está em 100%')
})

Then('o botão Start deve estar habilitado', () => {
  ProgressBarPage.validateStartButtonEnabled()
  cy.log('✅ Botão Start está habilitado')
})

Then('o botão Stop deve estar habilitado', () => {
  ProgressBarPage.validateStopButtonEnabled()
  cy.log('✅ Botão Stop está habilitado')
})

Then('o botão Reset deve estar habilitado', () => {
  ProgressBarPage.validateResetButtonEnabled()
  cy.log('✅ Botão Reset está habilitado')
})

Then('a barra de progresso deve estar visível', () => {
  ProgressBarPage.validateProgressBarVisible()
  cy.log('✅ Barra de progresso está visível')
})

Then('o valor do progresso deve ser exibido', () => {
  ProgressBarPage.validateProgressValueDisplayed()
  cy.log('✅ Valor do progresso está sendo exibido')
})
