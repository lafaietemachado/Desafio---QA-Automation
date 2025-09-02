class WebTablesPage {
  static selectors = {
    elementsMenu: 'div.card-body h5:contains("Elements")',
    webTablesSubmenu: 'span:contains("Web Tables")',
    addButton: '#addNewRecordButton',
    firstNameField: '#firstName',
    lastNameField: '#lastName',
    emailField: '#userEmail',
    ageField: '#age',
    salaryField: '#salary',
    departmentField: '#department',
    submitButton: '#submit',
    editButton: '[title="Edit"]',
    deleteButton: '[title="Delete"]',
    searchBox: '#searchBox',
    tableRows: '.rt-tbody .rt-tr-group',
    noDataMessage: '.rt-noData'
  }

  static navigateToElements() {
    cy.wait(2000)
    cy.get(this.selectors.elementsMenu).should('be.visible').click()
  }

  static clickWebTables() {
    cy.wait(2000)
    cy.get(this.selectors.webTablesSubmenu).should('be.visible').click()
  }

  static clickAddButton() {
    cy.get(this.selectors.addButton).should('be.visible').click()
  }

  static fillFirstName(firstName) {
    cy.get(this.selectors.firstNameField).should('be.visible').clear().type(firstName)
  }

  static fillLastName(lastName) {
    cy.get(this.selectors.lastNameField).should('be.visible').clear().type(lastName)
  }

  static fillEmail(email) {
    cy.get(this.selectors.emailField).should('be.visible').clear().type(email)
  }

  static fillAge(age) {
    cy.get(this.selectors.ageField).should('be.visible').clear().type(age)
  }

  static fillSalary(salary) {
    cy.get(this.selectors.salaryField).should('be.visible').clear().type(salary)
  }

  static fillDepartment(department) {
    cy.get(this.selectors.departmentField).should('be.visible').clear().type(department)
  }

  static submitForm() {
    cy.get(this.selectors.submitButton).should('be.visible').click()
  }

  static searchRecord(searchText) {
    cy.get(this.selectors.searchBox).should('be.visible').clear().type(searchText)
  }

  static editRecord(rowIndex = 0) {
    cy.get(this.selectors.editButton).eq(rowIndex).should('be.visible').click()
  }

  static deleteRecord(rowIndex = 0) {
    cy.get(this.selectors.deleteButton).eq(rowIndex).should('be.visible').click()
  }

  static verifyRecordExists(searchText) {
    cy.get(this.selectors.tableRows).should('contain', searchText)
  }

  static verifyRecordDeleted(searchText) {
    cy.get(this.selectors.noDataMessage).should('be.visible')
  }

  static getTableRowCount() {
    return cy.get(this.selectors.tableRows).its('length')
  }
}

export default WebTablesPage
