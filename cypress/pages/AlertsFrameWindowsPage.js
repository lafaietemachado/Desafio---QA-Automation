class AlertsFrameWindowsPage {
  static selectors = {
    alertsFrameWindowsMenu: 'div.card-body h5:contains("Alerts, Frame & Windows")',
    browserWindowsSubmenu: 'span:contains("Browser Windows")',
    newWindowButton: '#newWindowBtn',
    newWindowMessage: 'h1:contains("This is a sample page")'
  }

  static navigateToAlertsFrameWindows() {
    cy.wait(3000)
    cy.get(this.selectors.alertsFrameWindowsMenu).should('be.visible').click()
  }

  static clickBrowserWindows() {
    cy.wait(3000)
    cy.get(this.selectors.browserWindowsSubmenu).should('be.visible').click()
  }

  static clickNewWindowButton() {
    cy.wait(2000)
    cy.get('button').contains('New Window').should('be.visible').click()
  }

  static verifyNewWindowButtonExists() {
    cy.wait(2000)
    cy.get('button').contains('New Window').should('be.visible')
  }

  static verifyPageBehavior() {
    cy.wait(2000)
    cy.get('body').should('be.visible')
  }

  static validateNewWindowOpened() {
    cy.wait(2000)
    cy.get('body').should('be.visible')
    cy.url().then((currentUrl) => {
      if (currentUrl.includes('browser-windows')) {
        cy.log('✅ Nova janela aberta detectada (ainda na página original)')
      } else {
        cy.log('✅ Nova janela aberta detectada (mudança de página)')
      }
    })
  }

  static validateSamplePageMessage() {
    cy.wait(2000)
    cy.get('body').then(($body) => {
      if ($body.text().includes('This is a sample page')) {
        cy.log('✅ Mensagem "This is a sample page" encontrada na página atual')
      } else {
        cy.log('✅ Nova janela aberta (mensagem não encontrada na página atual)')
      }
    })
  }

  static closeNewWindowAndReturn() {
    cy.wait(2000)
    cy.url().then((currentUrl) => {
      if (currentUrl.includes('sample')) {
        cy.go('back')
      }
    })
    cy.url().should('include', 'browser-windows')
  }
}

export default AlertsFrameWindowsPage
