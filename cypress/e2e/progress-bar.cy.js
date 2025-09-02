import ProgressBarPage from '../pages/ProgressBarPage.js'

describe('Progress Bar', () => {
  beforeEach(() => {
    cy.navigateToDemoQA()
  })

  it('Controle básico da barra de progresso', () => {
    // Aguardar a página carregar completamente
    cy.wait(5000)
    
    // Navegar para Widgets
    cy.get('body').contains('Widgets').click({force: true})
    cy.wait(3000)
    
    // Navegar para Progress Bar
    cy.get('body').contains('Progress Bar').click({force: true})
    cy.wait(3000)
    
    // Verificar se chegamos na página correta
    cy.url().should('include', 'progress-bar')
    
    // Verificar se conseguimos encontrar elementos básicos
    cy.get('body').should('contain', 'Progress Bar')
    
    // Tentar encontrar botões por diferentes métodos
    cy.get('button').should('exist')
    
    // Encontrar o botão Start/Stop por texto
    cy.get('button').contains('Start').should('be.visible')
    
    // Primeira execução - parar ANTES dos 25% (monitoramento em tempo real)
    cy.get('button').contains('Start').click()
    
    // Monitorar o progresso e parar quando estiver próximo aos 25%
    // Usar polling para verificar o progresso a cada 200ms
    cy.wait(1000) // Aguardar o progresso começar
    
    // Verificar o progresso até atingir um valor próximo aos 25%
    cy.get('.progress-bar').should(($progressBar) => {
      const text = $progressBar.text()
      const currentValue = parseInt(text.replace('%', ''))
      
      // Se chegou próximo aos 25% (entre 20% e 25%), parar
      if (currentValue >= 20 && currentValue <= 25) {
        cy.log(`✅ Progresso atingiu ${currentValue}% - parando ANTES dos 25%`)
        return true
      }
      
      // Se ainda não chegou, continuar aguardando
      return false
    }, { timeout: 10000 })
    
    // Clicar no Stop para parar o progresso
    cy.get('button').contains('Stop').click()
    
    // Validar que o valor é menor ou igual a 25%
    ProgressBarPage.validateProgressLessThanOrEqual(25)
    
    // Segunda execução - deixar chegar aos 100%
    cy.get('button').contains('Start').click()
    
    // Aguardar até completar 100%
    ProgressBarPage.waitForProgressToComplete()
    
    // Resetar a progress bar
    cy.get('button').contains('Reset').click()
    
    // Validar que voltou para 0%
    ProgressBarPage.validateProgressEquals('0%')
  })
})
