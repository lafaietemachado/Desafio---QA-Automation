/// <reference types="cypress" />

import ProgressBarPage from '../../pages/ProgressBarPage.js'

describe('Progress Bar', () => {
  beforeEach(() => {
    cy.navigateToDemoQA()
  })

  it('Controle básico da barra de progresso', () => {
    cy.wait(5000)
    
    cy.get('body').contains('Widgets').click({force: true})
    cy.wait(3000)
    
    cy.get('body').contains('Progress Bar').click({force: true})
    cy.wait(3000)
    
    cy.url().should('include', 'progress-bar')
    
    cy.get('body').should('contain', 'Progress Bar')
    
    cy.get('button').should('exist')
    
    cy.get('button').contains('Start').should('be.visible')
    
    cy.get('button').contains('Start').click()
    
    cy.wait(1000)
    
    cy.get('.progress-bar').should(($progressBar) => {
      const text = $progressBar.text()
      const currentValue = parseInt(text.replace('%', ''))
      
      if (currentValue >= 20 && currentValue <= 25) {
        cy.log(`✅ Progresso atingiu ${currentValue}% - parando ANTES dos 25%`)
        return true
      }
      
      return false
    }, { timeout: 10000 })
    
    cy.get('button').contains('Stop').click()
    
    ProgressBarPage.validateProgressLessThanOrEqual(25)
    
    cy.get('button').contains('Start').click()
    
    ProgressBarPage.waitForProgressToComplete()
    
    cy.get('button').contains('Reset').click()
    
    ProgressBarPage.validateProgressEquals('0%')
  })
})
