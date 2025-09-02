import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('que estou na página de formulários de prática', () => {
  cy.navigateToDemoQA()
  cy.navigateToSection('Forms')
  cy.navigateToSubmenu('Practice Form')
  cy.log('🚀 Navegando para Forms → Practice Form')
})

When('preencher o campo First Name com {string}', (firstName) => {
  cy.fillField('#firstName', firstName)
  cy.log(`✅ First Name preenchido: ${firstName}`)
})

When('preencher o campo Last Name com {string}', (lastName) => {
  cy.fillField('#lastName', lastName)
  cy.log(`✅ Last Name preenchido: ${lastName}`)
})

When('preencher o campo Email com {string}', (email) => {
  cy.fillField('#userEmail', email)
  cy.log(`✅ Email preenchido: ${email}`)
})

When('selecionar o gênero {string}', (gender) => {
  if (gender === 'Male') {
    cy.selectRadioOption('#gender-radio-1')
  } else if (gender === 'Female') {
    cy.selectRadioOption('#gender-radio-2')
  } else if (gender === 'Other') {
    cy.selectRadioOption('#gender-radio-3')
  }
  cy.log(`✅ Gênero selecionado: ${gender}`)
})

When('preencher o campo Mobile com {string}', (mobile) => {
  cy.fillField('#userNumber', mobile)
  cy.log(`✅ Mobile preenchido: ${mobile}`)
})

When('preencher o campo Date of Birth com {string}', (dateOfBirth) => {
  cy.fillField('#dateOfBirthInput', dateOfBirth)
  cy.log(`✅ Date of Birth preenchido: ${dateOfBirth}`)
})

When('preencher o campo Subjects com {string}', (subjects) => {
  cy.fillField('#subjectsInput', subjects)
  cy.log(`✅ Subjects preenchido: ${subjects}`)
})

When('selecionar o hobby {string}', (hobby) => {
  if (hobby === 'Sports') {
    cy.selectCheckbox('#hobbies-checkbox-1')
  } else if (hobby === 'Reading') {
    cy.selectCheckbox('#hobbies-checkbox-2')
  } else if (hobby === 'Music') {
    cy.selectCheckbox('#hobbies-checkbox-3')
  }
  cy.log(`✅ Hobby selecionado: ${hobby}`)
})

When('fazer upload do arquivo {string}', (filename) => {
  cy.uploadFile('#uploadPicture', filename)
  cy.log(`✅ Arquivo ${filename} enviado com sucesso`)
})

When('preencher o campo Current Address com {string}', (address) => {
  cy.fillField('#currentAddress', address)
  cy.log(`✅ Current Address preenchido: ${address}`)
})

When('selecionar o estado {string}', (state) => {
  cy.fillField('#state', state)
  cy.log(`✅ Estado selecionado: ${state}`)
})

When('selecionar a cidade {string}', (city) => {
  cy.fillField('#city', city)
  cy.log(`✅ Cidade selecionada: ${city}`)
})

When('clicar no botão Submit', () => {
  cy.clickButton('#submit')
  cy.log('✅ Botão Submit clicado')
})

Then('o modal de sucesso deve ser exibido', () => {
  cy.validateSuccessModal()
  cy.log('✅ Modal de sucesso exibido corretamente')
})

Then('o modal deve conter a mensagem {string}', (message) => {
  cy.get('.modal-content').should('contain', message)
  cy.log(`✅ Modal contém a mensagem: ${message}`)
})

Then('o modal deve conter os dados preenchidos', () => {
  cy.get('.modal-content').should('contain', 'Lafaiete')
  cy.get('.modal-content').should('contain', 'Machado')
  cy.get('.modal-content').should('contain', 'lafaiete@teste.com')
  cy.get('.modal-content').should('contain', 'Male')
  cy.get('.modal-content').should('contain', '11999999999')
  cy.get('.modal-content').should('contain', 'Computer Science')
  cy.get('.modal-content').should('contain', 'Sports')
  cy.get('.modal-content').should('contain', 'test-file.txt')
  cy.get('.modal-content').should('contain', 'Rua Teste, 123')
  cy.log('✅ Modal contém todos os dados preenchidos')
})

When('fechar o modal de sucesso', () => {
  cy.clickButton('#closeLargeModal')
  cy.log('✅ Modal de sucesso fechado')
})

Then('devo retornar para a página do formulário', () => {
  cy.get('#firstName').should('be.visible')
  cy.get('#lastName').should('be.visible')
  cy.log('✅ Retornou para a página do formulário')
})
