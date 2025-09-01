

class FormsPage {
  static selectors = {
    formsMenu: 'div.card-body h5:contains("Forms")',
    practiceFormSubmenu: 'span:contains("Practice Form")',
    firstName: '#firstName',
    lastName: '#lastName',
    email: '#userEmail',
    genderMale: '#gender-radio-1',
    genderFemale: '#gender-radio-2',
    genderOther: '#gender-radio-3',
    mobile: '#userNumber',
    dateOfBirth: '#dateOfBirthInput',
    subjects: '#subjectsInput',
    hobbiesSports: '#hobbies-checkbox-1',
    hobbiesReading: '#hobbies-checkbox-2',
    hobbiesMusic: '#hobbies-checkbox-3',
    picture: '#uploadPicture',
    currentAddress: '#currentAddress',
    state: '#state',
    city: '#city',
    submitButton: '#submit',
    successModal: '.modal-content',
    closeModal: '#closeLargeModal'
  }

  static navigateToForms() {
    cy.wait(2000)
    cy.get(this.selectors.formsMenu).should('be.visible').click()
  }

  static clickPracticeForm() {
    cy.wait(2000)
    cy.get(this.selectors.practiceFormSubmenu).should('be.visible').click()
  }

  static fillFirstName(firstName) {
    cy.get(this.selectors.firstName).should('be.visible').clear().type(firstName)
  }

  static fillLastName(lastName) {
    cy.get(this.selectors.lastName).should('be.visible').clear().type(lastName)
  }

  static fillEmail(email) {
    cy.get(this.selectors.email).should('be.visible').clear().type(email)
  }

  static selectGender(gender) {
    switch(gender) {
      case 'Male':
        cy.get(this.selectors.genderMale).click({force: true})
        break
      case 'Female':
        cy.get(this.selectors.genderFemale).click({force: true})
        break
      case 'Other':
        cy.get(this.selectors.genderOther).click({force: true})
        break
    }
  }

  static fillMobile(mobile) {
    cy.get(this.selectors.mobile).should('be.visible').clear().type(mobile)
  }

  static fillDateOfBirth(date) {
    cy.get(this.selectors.dateOfBirth).should('be.visible').click()
    cy.get(this.selectors.dateOfBirth).clear()
    cy.get(this.selectors.dateOfBirth).type(date)
    cy.get('body').click()
  }

  static fillSubjects(subjects) {
    subjects.forEach(subject => {
      cy.get(this.selectors.subjects).should('be.visible').clear().type(subject)
      cy.get('.subjects-auto-complete__option').first().click()
    })
  }

  static selectHobbies(hobbies) {
    hobbies.forEach(hobby => {
      switch(hobby) {
        case 'Sports':
          cy.get(this.selectors.hobbiesSports).click({force: true})
          break
        case 'Reading':
          cy.get(this.selectors.hobbiesReading).click({force: true})
          break
        case 'Music':
          cy.get(this.selectors.hobbiesMusic).click({force: true})
          break
      }
    })
  }

  static uploadPicture(filePath) {
    cy.get(this.selectors.picture).should('be.visible').attachFile(filePath)
  }

  static fillCurrentAddress(address) {
    cy.get(this.selectors.currentAddress).should('be.visible').clear().type(address)
  }

  static selectState(state) {
    cy.get(this.selectors.state).should('be.visible').click()
    cy.get('div[id*="react-select"]').contains(state).click()
  }

  static selectCity(city) {
    cy.get(this.selectors.city).should('be.visible').click()
    cy.get('div[id*="react-select"]').contains(city).click()
  }

  static submitForm() {
    cy.get(this.selectors.submitButton).should('be.visible').click()
  }

  static verifySuccessModal() {
    cy.get(this.selectors.successModal).should('be.visible')
  }

  static closeModal() {
    cy.get(this.selectors.closeModal).scrollIntoView().click({force: true})
  }
}

export default FormsPage
