/// <reference types="cypress" />

import WebTablesPage from '../../pages/WebTablesPage.js'

describe('Web Tables', () => {
  beforeEach(() => {
    cy.navigateToDemoQA()
  })

  it('CRUD completo de registro na tabela web', () => {
    cy.navigateToSection('Elements')
    cy.navigateToSubmenu('Web Tables')
    
    const testData = {
      firstName: `Usuário${Date.now()}`,
      lastName: `Teste${Date.now()}`,
      email: `usuario${Date.now()}@teste.com`,
      age: '25',
      salary: '5000',
      department: 'TI'
    }

    cy.clickButton('#addNewRecordButton', 'Add')
    cy.fillField('#firstName', testData.firstName, 'Nome')
    cy.fillField('#lastName', testData.lastName, 'Sobrenome')
    cy.fillField('#userEmail', testData.email, 'Email')
    cy.fillField('#age', testData.age, 'Idade')
    cy.fillField('#salary', testData.salary, 'Salário')
    cy.fillField('#department', testData.department, 'Departamento')
    cy.clickButton('#submit', 'Submit')
    
    cy.searchRecord(testData.firstName)
    WebTablesPage.verifyRecordExists(testData.firstName)
    
    WebTablesPage.editRecord(0)
    const updatedFirstName = `Editado${Date.now()}`
    cy.fillField('#firstName', updatedFirstName, 'Nome Editado')
    cy.clickButton('#submit', 'Submit')
    
    cy.searchRecord(updatedFirstName)
    WebTablesPage.verifyRecordExists(updatedFirstName)
    
    WebTablesPage.deleteRecord(0)
    cy.searchRecord(updatedFirstName)
    WebTablesPage.verifyRecordDeleted(updatedFirstName)
  })

  it('Criação e remoção de múltiplos registros', () => {
    cy.navigateToSection('Elements')
    cy.navigateToSubmenu('Web Tables')
    
    const records = []
    for (let i = 1; i <= 12; i++) {
      const record = {
        firstName: `Usuário${i}_${Date.now()}`,
        lastName: `Teste${i}_${Date.now()}`,
        email: `usuario${i}_${Date.now()}@teste.com`,
        age: (20 + i).toString(),
        salary: (3000 + (i * 100)).toString(),
        department: `Dept${i}`
      }
      records.push(record)
      
      cy.clickButton('#addNewRecordButton', 'Add')
      cy.fillField('#firstName', record.firstName, 'Nome')
      cy.fillField('#lastName', record.lastName, 'Sobrenome')
      cy.fillField('#userEmail', record.email, 'Email')
      cy.fillField('#age', record.age, 'Idade')
      cy.fillField('#salary', record.salary, 'Salário')
      cy.fillField('#department', record.department, 'Departamento')
      cy.clickButton('#submit', 'Submit')
    }
    
    records.forEach(record => {
      cy.searchRecord(record.firstName)
      WebTablesPage.verifyRecordExists(record.firstName)
      WebTablesPage.deleteRecord(0)
      cy.searchRecord(record.firstName)
      WebTablesPage.verifyRecordDeleted(record.firstName)
    })
  })
})
