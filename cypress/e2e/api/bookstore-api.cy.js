/// <reference types="cypress" />

describe('Fluxo da API BookStore', () => {
  let userId
  let token
  let selectedBooks = []

  it('Fluxo completo de registro de usuário e reserva de livros', () => {
    const userData = {
      userName: `user${Date.now()}`,
      password: 'Test123!'
    }

    cy.request('POST', 'https://demoqa.com/Account/v1/User', userData).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.username).to.eq(userData.userName)
      userId = response.body.userID
      cy.log(`✅ Usuário criado com ID: ${userId}`)
    })

    cy.request('POST', 'https://demoqa.com/Account/v1/GenerateToken', userData).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.token).to.not.be.null
      token = response.body.token
      cy.log(`✅ Token gerado: ${token}`)
    })

    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/Authorized',
      body: userData
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.true
      cy.log('✅ Usuário autorizado com sucesso')
    })

    cy.request('GET', 'https://demoqa.com/BookStore/v1/Books').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.books).to.have.length.greaterThan(0)
      
      const books = response.body.books
      cy.log(`✅ ${books.length} livros disponíveis encontrados`)
      
      selectedBooks = [books[0], books[1]]
      cy.log(`📚 Livros selecionados: ${selectedBooks[0].title} e ${selectedBooks[1].title}`)
    })

    cy.then(() => {
      expect(userId).to.not.be.undefined
      expect(token).to.not.be.undefined
      
      selectedBooks.forEach((book, index) => {
        const bookData = {
          userId: userId,
          collectionOfIsbns: [
            {
              isbn: book.isbn
            }
          ]
        }

        cy.request({
          method: 'POST',
          url: 'https://demoqa.com/BookStore/v1/Books',
          body: bookData,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then((response) => {
          expect(response.status).to.eq(201)
          cy.log(`✅ Livro ${index + 1} reservado: ${book.title}`)
        })
      })
    })

    cy.then(() => {
      cy.request({
        method: 'GET',
        url: `https://demoqa.com/Account/v1/User/${userId}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.userId).to.eq(userId)
        expect(response.body.username).to.eq(userData.userName)
        expect(response.body.books).to.have.length(2)
        
        const reservedBooks = response.body.books
        cy.log(`✅ Detalhes do usuário obtidos com sucesso`)
        cy.log(`📚 Livros reservados: ${reservedBooks.length}`)
        
        reservedBooks.forEach((book, index) => {
          cy.log(`   ${index + 1}. ${book.title} (ISBN: ${book.isbn})`)
        })
      })
    })
  })

  it('Validação de usuário não autorizado', () => {
    const invalidUserData = {
      userName: 'usuario_inexistente',
      password: 'senha_incorreta'
    }

    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/Account/v1/Authorized',
      body: invalidUserData,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
      cy.log('✅ Validação de usuário não encontrado funcionando')
    })
  })

  it('Tentativa de reserva de livro sem autorização', () => {
    const unauthorizedBookData = {
      userId: 'user_inexistente',
      collectionOfIsbns: [
        {
          isbn: '9781449325862'
        }
      ]
    }

    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/BookStore/v1/Books',
      body: unauthorizedBookData,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.be.greaterThan(400)
      cy.log('✅ Validação de autorização para reserva funcionando')
    })
  })
})
