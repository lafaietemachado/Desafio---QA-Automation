describe('Fluxo da API BookStore', () => {
  it('Fluxo completo de registro de usuário e reserva de livros', () => {
    const userData = {
      userName: `user${Date.now()}`,
      password: 'Test123!'
    }

    cy.request('POST', 'https://demoqa.com/Account/v1/User', userData).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.username).to.eq(userData.userName)
    })

    cy.request('POST', 'https://demoqa.com/Account/v1/GenerateToken', userData).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.token).to.not.be.null
    })

    cy.request('GET', 'https://demoqa.com/BookStore/v1/Books').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.books).to.have.length.greaterThan(0)
    })
  })
})
