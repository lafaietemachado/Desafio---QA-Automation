

class ProgressBarPage {
  static selectors = {
    widgetsMenu: 'div.card-body h5:contains("Widgets")',
    progressBarSubmenu: 'span:contains("Progress Bar")',
    startButton: '#startStopButton',
    progressBar: '#progressBar',
    progressValue: '.progress-bar'
  }

  static navigateToWidgets() {
    cy.wait(2000)
    cy.get(this.selectors.widgetsMenu).should('be.visible').click()
  }

  static clickProgressBar() {
    cy.wait(2000)
    cy.get(this.selectors.progressBarSubmenu).should('be.visible').click()
  }

  static clickStartButton() {
    cy.get(this.selectors.startButton).should('be.visible').click()
  }

  static getProgressValue() {
    return cy.get(this.selectors.progressValue).invoke('text')
  }

  static waitForProgress(targetPercentage) {
    cy.get(this.selectors.progressValue).should('contain', targetPercentage)
  }

  static validateProgressLessThanOrEqual(maxPercentage) {
    cy.get(this.selectors.progressValue).invoke('text').then((text) => {
      const currentValue = parseInt(text.replace('%', ''))
      expect(currentValue).to.be.at.most(maxPercentage)
    })
  }

  static validateProgressEquals(targetPercentage) {
    cy.get(this.selectors.progressValue).should('contain', targetPercentage)
  }

  static waitForProgressToComplete() {
    cy.get(this.selectors.progressValue).should('contain', '100%', { timeout: 30000 })
  }

  static waitForProgressToReach(percentage) {
    cy.get(this.selectors.progressValue).should('contain', percentage, { timeout: 30000 })
  }

  static waitForProgressToReachOrStop(targetPercentage, stopButtonSelector) {
    cy.wait(2000)
    
    cy.get(this.selectors.progressValue).should(($progressBar) => {
      const text = $progressBar.text()
      const currentValue = parseInt(text.replace('%', ''))
      
      if (currentValue >= 20 && currentValue <= 25) {
        cy.log(`✅ Progresso atingiu ${currentValue}% - parando antes dos ${targetPercentage}%`)
        return true
      }
      
      return false
    }, { timeout: 10000 })
    
    cy.get(stopButtonSelector).click()
  }
}

export default ProgressBarPage
