class BookStoreAPI {
  static endpoints = {
    getBooks: '/BookStore/v1/Books',
    addBooks: '/BookStore/v1/Books'
  }

  static getBooks() {
    return cy.request({
      method: 'GET',
      url: this.endpoints.getBooks,
      failOnStatusCode: false
    })
  }

  static addBooks(userID, books, token = null) {
    const headers = {
      'Content-Type': 'application/json'
    }
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }
    
    return cy.request({
      method: 'POST',
      url: this.endpoints.addBooks,
      headers: headers,
      body: {
        userId: userID,
        collectionOfIsbns: books
      },
      failOnStatusCode: false
    })
  }
}

export default BookStoreAPI
