class AccountAPI {
  static endpoints = {
    createUser: '/Account/v1/User',
    generateToken: '/Account/v1/GenerateToken',
    authorized: '/Account/v1/Authorized',
    getUser: '/Account/v1/User/{userID}'
  }

  static createUser(userData) {
    return cy.request({
      method: 'POST',
      url: this.endpoints.createUser,
      body: userData,
      failOnStatusCode: false
    })
  }

  static generateToken(credentials) {
    return cy.request({
      method: 'POST',
      url: this.endpoints.generateToken,
      body: credentials,
      failOnStatusCode: false
    })
  }

  static checkAuthorized(credentials) {
    return cy.request({
      method: 'POST',
      url: this.endpoints.authorized,
      body: credentials,
      failOnStatusCode: false
    })
  }

  static getUser(userID, token = null) {
    const url = this.endpoints.getUser.replace('{userID}', userID)
    const headers = {
      'Content-Type': 'application/json'
    }
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }
    
    return cy.request({
      method: 'GET',
      url: url,
      headers: headers,
      failOnStatusCode: false
    })
  }
}

export default AccountAPI
