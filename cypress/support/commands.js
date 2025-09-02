Cypress.Commands.add('navigateToDemoQA', () => {
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.visit('https://demoqa.com/', { timeout: 120000 })
  cy.url().should('include', 'demoqa.com')
  cy.log('✅ DemoQA carregado com sucesso')
})

Cypress.Commands.add('navigateToSection', (sectionName) => {
  cy.wait(2000)
  cy.get(`div.card-body h5:contains("${sectionName}")`).should('be.visible').click()
  cy.log(`✅ Seção ${sectionName} acessada`)
})

Cypress.Commands.add('navigateToSubmenu', (submenuName) => {
  cy.wait(2000)
  cy.get(`span:contains("${submenuName}")`).should('be.visible').click()
  cy.log(`✅ Submenu ${submenuName} acessado`)
})

Cypress.Commands.add('fillField', (selector, value, fieldName = 'campo') => {
  cy.get(selector).should('be.visible').clear().type(value)
  cy.log(`✅ ${fieldName} preenchido com: ${value}`)
})

Cypress.Commands.add('clickButton', (selector, buttonName = 'botão') => {
  cy.get(selector).first().should('be.visible').click()
  cy.log(`✅ ${buttonName} clicado com sucesso`)
})

Cypress.Commands.add('validateText', (selector, expectedText, elementName = 'elemento') => {
  cy.get(selector).should('contain', expectedText)
  cy.log(`✅ ${elementName} contém o texto: "${expectedText}"`)
})

Cypress.Commands.add('waitAndValidate', (selector, elementName = 'elemento', timeout = 2000) => {
  cy.wait(timeout)
  cy.get(selector).should('be.visible')
  cy.log(`✅ ${elementName} visível após aguardar ${timeout}ms`)
})

Cypress.Commands.add('uploadFile', (selector, filePath, fieldName = 'arquivo') => {
  cy.get(selector).should('be.visible').attachFile(filePath)
  cy.log(`✅ ${fieldName} enviado: ${filePath}`)
})

Cypress.Commands.add('selectRadioOption', (selector, optionName = 'opção') => {
  cy.get(selector).click({force: true})
  cy.log(`✅ ${optionName} selecionada`)
})

Cypress.Commands.add('selectCheckbox', (selector, optionName = 'opção') => {
  cy.get(selector).click({force: true})
  cy.log(`✅ ${optionName} marcada`)
})

Cypress.Commands.add('validateSuccessModal', () => {
  cy.get('.modal-content').should('be.visible')
  cy.log('✅ Modal de sucesso exibido corretamente')
})

Cypress.Commands.add('closeModal', (closeSelector = '#closeLargeModal') => {
  cy.get(closeSelector).scrollIntoView().click({force: true})
  cy.log('✅ Modal fechado com sucesso')
})
