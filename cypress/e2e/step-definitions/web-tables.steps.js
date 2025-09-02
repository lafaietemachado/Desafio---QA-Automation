import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import WebTablesPage from '../../pages/WebTablesPage.js'

Given('que estou na página de Web Tables', () => {
  cy.navigateToDemoQA()
  cy.navigateToSection('Elements')
  cy.navigateToSubmenu('Web Tables')
  cy.log('🚀 Navegando para Elements → Web Tables')
})

When('clicar no botão Add', () => {
  WebTablesPage.clickAddButton()
  cy.log('✅ Botão Add clicado')
})

When('preencher o formulário de registro com os dados:', (dataTable) => {
  const data = dataTable.rowsHash()
  
  WebTablesPage.fillFirstName(data['First Name'])
  WebTablesPage.fillLastName(data['Last Name'])
  WebTablesPage.fillEmail(data['Email'])
  WebTablesPage.fillAge(data['Age'])
  WebTablesPage.fillSalary(data['Salary'])
  WebTablesPage.fillDepartment(data['Department'])
  
  cy.log(`✅ Formulário preenchido com: ${data['First Name']} ${data['Last Name']}`)
})

When('clicar no botão Submit do formulário', () => {
  WebTablesPage.clickSubmitButton()
  cy.log('✅ Botão Submit clicado')
})

When('buscar o registro com email {string}', (email) => {
  WebTablesPage.searchRecord(email)
  cy.log(`✅ Buscando registro com email: ${email}`)
})

When('editar o registro com email {string}', (email) => {
  WebTablesPage.editRecord(email)
  cy.log(`✅ Editando registro com email: ${email}`)
})

When('deletar o registro com email {string}', (email) => {
  WebTablesPage.deleteRecord(email)
  cy.log(`✅ Deletando registro com email: ${email}`)
})

When('criar {int} registros dinamicamente', (count) => {
  for (let i = 1; i <= count; i++) {
    WebTablesPage.clickAddButton()
    
    const firstName = `User${i}`
    const lastName = `Test${i}`
    const email = `user${i}@teste.com`
    const age = 25 + i
    const salary = 50000 + (i * 1000)
    const department = 'QA'
    
    WebTablesPage.fillFirstName(firstName)
    WebTablesPage.fillLastName(lastName)
    WebTablesPage.fillEmail(email)
    WebTablesPage.fillAge(age.toString())
    WebTablesPage.fillSalary(salary.toString())
    WebTablesPage.fillDepartment(department)
    
    WebTablesPage.clickSubmitButton()
    cy.wait(500)
    
    cy.log(`✅ Registro ${i} criado: ${firstName} ${lastName}`)
  }
})

When('deletar todos os registros criados', () => {
  WebTablesPage.deleteAllRecords()
  cy.log('✅ Todos os registros deletados')
})

Then('o registro deve ser criado com sucesso', () => {
  cy.get('.rt-tbody').should('contain', 'Lafaiete')
  cy.get('.rt-tbody').should('contain', 'Machado')
  cy.get('.rt-tbody').should('contain', 'lafaiete@teste.com')
  cy.log('✅ Registro criado e exibido na tabela')
})

Then('o registro deve ser editado com sucesso', () => {
  cy.get('.rt-tbody').should('contain', 'Lafaiete Editado')
  cy.log('✅ Registro editado com sucesso')
})

Then('o registro deve ser removido da tabela', () => {
  cy.get('.rt-tbody').should('not.contain', 'lafaiete@teste.com')
  cy.log('✅ Registro removido da tabela')
})

Then('a tabela deve conter {int} registros', (count) => {
  cy.get('.rt-tbody .rt-tr').should('have.length', count)
  cy.log(`✅ Tabela contém ${count} registros`)
})

Then('a tabela deve estar vazia', () => {
  cy.get('.rt-tbody .rt-tr').should('have.length', 0)
  cy.log('✅ Tabela está vazia')
})

Then('o formulário deve estar visível', () => {
  cy.get('#registration-form-modal').should('be.visible')
  cy.log('✅ Formulário de registro está visível')
})

Then('o formulário deve ser fechado após submissão', () => {
  cy.get('#registration-form-modal').should('not.be.visible')
  cy.log('✅ Formulário fechado após submissão')
})
