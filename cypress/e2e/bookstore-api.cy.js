import AccountAPI from '../pages/AccountPage.js'
import BookStoreAPI from '../pages/BookStorePage.js'

describe('Fluxo da API BookStore - Implementação BDD', () => {
  let userID = null
  let userCredentials = null
  let accessToken = null
  let availableBooks = null
  let selectedBooks = []

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    userID = null
    userCredentials = null
    accessToken = null
    availableBooks = null
    selectedBooks = []
  })

  it('Fluxo completo de registro de usuário e reserva de livros', () => {
    cy.log('🌱 Given: Eu tenho credenciais de usuário válidas')
    
    const timestamp = Date.now()
    userCredentials = {
      userName: `testuser${timestamp}`,
      password: 'Test123!'
    }
    cy.log(`📝 Credenciais geradas para usuário: ${userCredentials.userName}`)

    cy.log('🔄 When: Eu crio uma nova conta de usuário')
    AccountAPI.createUser(userCredentials).then((response) => {
      expect(response.status).to.equal(201)
      userID = response.body.userID
      cy.log(`✅ Usuário criado com sucesso com ID: ${userID}`)
    })

    cy.log('🔄 When: Eu gero um token de acesso')
    AccountAPI.generateToken(userCredentials).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.token).to.not.be.null
      accessToken = response.body.token
      cy.log('✅ Token de acesso gerado com sucesso')
    })

    cy.log('🔍 Then: O usuário deve estar autorizado')
    AccountAPI.checkAuthorized(userCredentials).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body).to.equal(true)
      cy.log('✅ Usuário está autorizado')
    })

    cy.log('🔄 When: Eu listo os livros disponíveis')
    BookStoreAPI.getBooks().then((response) => {
      expect(response.status).to.equal(200)
      availableBooks = response.body.books
      expect(availableBooks).to.be.an('array')
      expect(availableBooks.length).to.be.greaterThan(0)
      cy.log(`✅ Encontrados ${availableBooks.length} livros disponíveis`)

      cy.log('🔄 When: Eu reservo dois livros da minha escolha')
      
      selectedBooks = availableBooks.slice(0, 2).map(book => ({
        isbn: book.isbn
      }))
      
      BookStoreAPI.addBooks(userID, selectedBooks, accessToken).then((response) => {
        expect(response.status).to.equal(201)
        cy.log(`✅ ${selectedBooks.length} livros reservados com sucesso`)

        cy.log('🔍 Then: Eu devo ver os detalhes do usuário com os livros reservados')
        AccountAPI.getUser(userID, accessToken).then((userResponse) => {
          expect(userResponse.status).to.equal(200)
          expect(userResponse.body.userId).to.equal(userID)
          expect(userResponse.body.books).to.be.an('array')
          expect(userResponse.body.books.length).to.equal(2)
          
          const reservedBookIsbns = selectedBooks.map(book => book.isbn)
          userResponse.body.books.forEach(book => {
            expect(reservedBookIsbns).to.include(book.isbn)
          })
          
          cy.log(`✅ Usuário possui ${userResponse.body.books.length} livros reservados`)
          cy.log('🎉 Fluxo completo do BookStore executado com sucesso!')
        })
      })
    })
  })
})
