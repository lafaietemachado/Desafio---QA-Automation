/// <reference types="cypress" />

describe('Practice Form', () => {
  beforeEach(() => {
    cy.navigateToDemoQA()
  })

  it('Preenchimento completo do formulário de prática', () => {
    cy.navigateToSection('Forms')
    cy.navigateToSubmenu('Practice Form')
    
    const testData = {
      firstName: `Usuário${Date.now()}`,
      lastName: `Teste${Date.now()}`,
      email: `usuario${Date.now()}@teste.com`,
      gender: 'Male',
      mobile: `1199999${Math.floor(Math.random() * 9999).toString().padStart(4, '0')}`,
      currentAddress: `Endereço de teste ${Date.now()}, São Paulo - SP`
    }

    cy.fillField('#firstName', testData.firstName, 'Nome')
    cy.fillField('#lastName', testData.lastName, 'Sobrenome')
    cy.fillField('#userEmail', testData.email, 'Email')
    cy.selectRadioOption('#gender-radio-1', 'Gênero Masculino')
    cy.fillField('#userNumber', testData.mobile, 'Telefone')
    cy.fillField('#currentAddress', testData.currentAddress, 'Endereço')
    cy.uploadFile('#uploadPicture', 'test-file.txt', 'Arquivo de teste')
    cy.clickButton('#submit', 'Botão Submit')
    cy.validateSuccessModal()
    cy.closeModal()
  })
})
