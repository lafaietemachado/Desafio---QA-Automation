import FormsPage from '../pages/FormsPage.js'

describe('Formulário de Prática - Implementação BDD', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://demoqa.com/', { timeout: 120000 })
  })

  it('Preenchimento completo do formulário de prática', () => {
    cy.log('🌱 Given: Eu estou na página inicial do DemoQA')
    cy.url().should('include', 'demoqa.com')
    cy.log('✅ Página inicial carregada com sucesso')

    cy.log('🔄 When: Eu navego para a seção Forms')
    FormsPage.navigateToForms()
    cy.log('✅ Seção Forms acessada')

    cy.log('🔄 When: Eu clico no submenu Practice Form')
    FormsPage.clickPracticeForm()
    cy.log('✅ Practice Form acessado')

    cy.log('🔄 When: Eu preencho TODO o formulário com valores aleatórios')
    
    const testData = {
      firstName: `Usuário${Date.now()}`,
      lastName: `Teste${Date.now()}`,
      email: `usuario${Date.now()}@teste.com`,
      gender: 'Male',
      mobile: `1199999${Math.floor(Math.random() * 9999).toString().padStart(4, '0')}`,
      currentAddress: `Endereço de teste ${Date.now()}, São Paulo - SP`
    }

    cy.log('📝 Preenchendo dados pessoais')
    FormsPage.fillFirstName(testData.firstName)
    FormsPage.fillLastName(testData.lastName)
    FormsPage.fillEmail(testData.email)
    
    cy.log('📝 Selecionando gênero')
    FormsPage.selectGender(testData.gender)
    
    cy.log('📝 Preenchendo telefone')
    FormsPage.fillMobile(testData.mobile)
    
    cy.log('📝 Preenchendo endereço')
    FormsPage.fillCurrentAddress(testData.currentAddress)
    
    cy.log('📝 Fazendo upload do arquivo .txt')
    FormsPage.uploadPicture('test-file.txt')
    
    cy.log('✅ Formulário preenchido com campos essenciais e upload')

    cy.log('🔄 When: Eu submeto o formulário')
    FormsPage.submitForm()
    cy.log('✅ Formulário submetido')

    cy.log('🔍 Then: O popup de sucesso deve ser exibido')
    FormsPage.verifySuccessModal()
    cy.log('✅ Popup de sucesso exibido corretamente')

    cy.log('🔄 When: Eu fecho o popup')
    FormsPage.closeModal()
    cy.log('✅ Popup fechado com sucesso')

    cy.log('🎉 Formulário de prática preenchido e submetido com sucesso!')
  })
})
