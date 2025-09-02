/// <reference types="cypress" />

import SortablePage from '../../pages/SortablePage.js'

describe('Sortable - Drag and Drop', () => {
  beforeEach(() => {
    cy.navigateToDemoQA()
  })

  it('Reorganizar elementos da lista na ordem crescente', () => {
    cy.navigateToSection('Interactions')
    cy.navigateToSubmenu('Sortable')
    
    SortablePage.switchToListTab()
    cy.wait(1000)
    
    let initialOrder = []
    SortablePage.getListItems().then(($items) => {
      $items.each((index, el) => {
        initialOrder.push(el.textContent.trim())
      })
      
      cy.log(`📋 Ordem inicial: ${initialOrder.join(' → ')}`)
      
      const expectedOrder = [...initialOrder].sort((a, b) => a.localeCompare(b))
      cy.log(`🎯 Ordem esperada: ${expectedOrder.join(' → ')}`)
      
      expectedOrder.forEach((expectedText, targetIndex) => {
        const currentIndex = initialOrder.indexOf(expectedText)
        if (currentIndex !== targetIndex && currentIndex !== -1) {
          cy.log(`🔄 Movendo "${expectedText}" da posição ${currentIndex} para ${targetIndex}`)
          SortablePage.dragAndDropItem(currentIndex, targetIndex, false)
          cy.wait(500)
          
          initialOrder.splice(currentIndex, 1)
          initialOrder.splice(targetIndex, 0, expectedText)
        }
      })
      
      SortablePage.getListItems().then(($finalItems) => {
        const finalOrder = []
        $finalItems.each((index, el) => {
          finalOrder.push(el.textContent.trim())
        })
        
        cy.log(`✅ Ordem final: ${finalOrder.join(' → ')}`)
        
        const sortedOrder = [...finalOrder].sort((a, b) => a.localeCompare(b))
        expect(finalOrder).to.deep.equal(sortedOrder)
        
        cy.log('🎉 Elementos ordenados com sucesso na ordem crescente!')
      })
    })
  })

  it('Reorganizar elementos da grade na ordem crescente', () => {
    cy.navigateToSection('Interactions')
    cy.navigateToSubmenu('Sortable')
    
    SortablePage.switchToGridTab()
    cy.wait(1000)
    
    let initialOrder = []
    SortablePage.getGridItems().then(($items) => {
      $items.each((index, el) => {
        initialOrder.push(el.textContent.trim())
      })
      
      cy.log(`📋 Ordem inicial da grade: ${initialOrder.join(' → ')}`)
      
      const expectedOrder = [...initialOrder].sort((a, b) => a.localeCompare(b))
      cy.log(`🎯 Ordem esperada da grade: ${expectedOrder.join(' → ')}`)
      
      expectedOrder.forEach((expectedText, targetIndex) => {
        const currentIndex = initialOrder.indexOf(expectedText)
        if (currentIndex !== targetIndex && currentIndex !== -1) {
          cy.log(`🔄 Movendo "${expectedText}" da posição ${currentIndex} para ${targetIndex}`)
          SortablePage.dragAndDropItem(currentIndex, targetIndex, true)
          cy.wait(500)
          
          initialOrder.splice(currentIndex, 1)
          initialOrder.splice(targetIndex, 0, expectedText)
        }
      })
      
      SortablePage.getGridItems().then(($finalItems) => {
        const finalOrder = []
        $finalItems.each((index, el) => {
          finalOrder.push(el.textContent.trim())
        })
        
        cy.log(`✅ Ordem final da grade: ${finalOrder.join(' → ')}`)
        
        const sortedOrder = [...finalOrder].sort((a, b) => a.localeCompare(b))
        expect(finalOrder).to.deep.equal(sortedOrder)
        
        cy.log('🎉 Elementos da grade ordenados com sucesso na ordem crescente!')
      })
    })
  })

  it('Verificar funcionalidade de drag and drop individual', () => {
    cy.navigateToSection('Interactions')
    cy.navigateToSubmenu('Sortable')
    
    SortablePage.switchToListTab()
    cy.wait(1000)
    
    SortablePage.getListItems().then(($items) => {
      if ($items.length >= 2) {
        const firstItemText = $items.eq(0).text().trim()
        const secondItemText = $items.eq(1).text().trim()
        
        cy.log(`🔄 Testando drag and drop: movendo "${firstItemText}" para posição 1`)
        SortablePage.dragAndDropItem(0, 1, false)
        cy.wait(500)
        
        SortablePage.getListItems().eq(0).should('contain', secondItemText)
        SortablePage.getListItems().eq(1).should('contain', firstItemText)
        
        cy.log('✅ Drag and drop individual funcionando corretamente!')
      }
    })
  })
})
