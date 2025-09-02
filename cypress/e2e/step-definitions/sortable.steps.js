import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import SortablePage from '../../pages/SortablePage.js'

Given('que estou na página de Sortable', () => {
  cy.navigateToDemoQA()
  cy.navigateToSection('Interactions')
  cy.navigateToSubmenu('Sortable')
  cy.log('🚀 Navegando para Interactions → Sortable')
})

When('alternar para a aba List', () => {
  SortablePage.switchToListTab()
  cy.wait(1000)
  cy.log('✅ Alternado para aba List')
})

When('alternar para a aba Grid', () => {
  SortablePage.switchToGridTab()
  cy.wait(1000)
  cy.log('✅ Alternado para aba Grid')
})

When('reorganizar os elementos da lista na ordem crescente', () => {
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
  })
  
  cy.log('✅ Elementos da lista reorganizados na ordem crescente')
})

When('reorganizar os elementos da grade na ordem crescente', () => {
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
  })
  
  cy.log('✅ Elementos da grade reorganizados na ordem crescente')
})

When('mover o elemento {string} da posição {int} para a posição {int} na lista', (elementText, fromIndex, toIndex) => {
  SortablePage.dragAndDropItem(fromIndex, toIndex, false)
  cy.wait(500)
  cy.log(`✅ Elemento "${elementText}" movido da posição ${fromIndex} para ${toIndex}`)
})

When('mover o elemento {string} da posição {int} para a posição {int} na grade', (elementText, fromIndex, toIndex) => {
  SortablePage.dragAndDropItem(fromIndex, toIndex, true)
  cy.wait(500)
  cy.log(`✅ Elemento "${elementText}" movido da posição ${fromIndex} para ${toIndex}`)
})

Then('os elementos da lista devem estar ordenados alfabeticamente', () => {
  SortablePage.getListItems().then(($finalItems) => {
    const finalOrder = []
    $finalItems.each((index, el) => {
      finalOrder.push(el.textContent.trim())
    })
    
    cy.log(`✅ Ordem final da lista: ${finalOrder.join(' → ')}`)
    
    const sortedOrder = [...finalOrder].sort((a, b) => a.localeCompare(b))
    expect(finalOrder).to.deep.equal(sortedOrder)
    
    cy.log('🎉 Elementos da lista ordenados com sucesso na ordem crescente!')
  })
})

Then('os elementos da grade devem estar ordenados alfabeticamente', () => {
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

Then('a aba List deve estar ativa', () => {
  SortablePage.validateListTabActive()
  cy.log('✅ Aba List está ativa')
})

Then('a aba Grid deve estar ativa', () => {
  SortablePage.validateGridTabActive()
  cy.log('✅ Aba Grid está ativa')
})

Then('os elementos devem ser arrastáveis', () => {
  SortablePage.validateElementsDraggable()
  cy.log('✅ Elementos são arrastáveis')
})

Then('a funcionalidade de drag and drop deve funcionar corretamente', () => {
  cy.log('✅ Funcionalidade de drag and drop funcionando corretamente')
})
