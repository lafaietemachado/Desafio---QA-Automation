class SortablePage {
  static selectors = {
    listTab: 'a#demo-tab-list',
    gridTab: 'a#demo-tab-grid',
    listItems: '#demo-tabpane-list .list-group-item',
    gridItems: '#demo-tabpane-grid .list-group-item'
  }

  static switchToListTab() {
    cy.get(this.selectors.listTab).should('be.visible').click()
    cy.wait(500)
  }

  static switchToGridTab() {
    cy.get(this.selectors.gridTab).should('be.visible').click()
    cy.wait(500)
  }

  static getListItems() {
    return cy.get(this.selectors.listItems)
  }

  static getGridItems() {
    return cy.get(this.selectors.gridItems)
  }

  static dragAndDropItem(fromIndex, toIndex, isGrid = false) {
    const selector = isGrid ? this.selectors.gridItems : this.selectors.listItems
    cy.dragAndDropByIndex(selector, fromIndex, toIndex, 'item sortable')
  }

  static verifyItemOrder(expectedOrder, isGrid = false) {
    const selector = isGrid ? this.selectors.gridItems : this.selectors.listItems
    cy.get(selector).each(($el, index) => {
      cy.wrap($el).should('contain', expectedOrder[index])
    })
  }

  static getCurrentItemOrder(isGrid = false) {
    const selector = isGrid ? this.selectors.gridItems : this.selectors.listItems
    const items = []
    cy.get(selector).each(($el) => {
      items.push($el.text().trim())
    })
    return items
  }

  static sortItemsInAscendingOrder(isGrid = false) {
    const selector = isGrid ? this.selectors.gridItems : this.selectors.listItems
    
    cy.get(selector).then(($items) => {
      const items = []
      $items.each((index, el) => {
        items.push({
          index: index,
          text: el.textContent.trim()
        })
      })
      
      const sortedItems = items.sort((a, b) => a.text.localeCompare(b.text))
      
      sortedItems.forEach((item, targetIndex) => {
        if (item.index !== targetIndex) {
          this.dragAndDropItem(item.index, targetIndex, isGrid)
          cy.wait(500)
        }
      })
    })
  }
}

export default SortablePage
