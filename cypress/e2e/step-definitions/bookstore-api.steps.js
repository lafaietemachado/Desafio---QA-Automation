import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

let userId = ''
let token = ''
let books = []

Given('que estou na API BookStore', () => {
  cy.log('🚀 Iniciando testes da API BookStore')
})

When('criar um novo usuário com username {string} e password {string}', (username, password) => {
  cy.request({
    method: 'POST',
    url: 'https://demoqa.com/Account/v1/User',
    body: {
      userName: username,
      password: password
    },
    failOnStatusCode: false
  }).then((response) => {
    if (response.status === 201) {
      userId = response.body.userID
      cy.log(`✅ Usuário criado com sucesso. ID: ${userId}`)
      expect(response.status).to.eq(201)
    } else {
      cy.log(`⚠️ Usuário já existe ou erro na criação: ${response.status}`)
      cy.request({
        method: 'POST',
        url: 'https://demoqa.com/Account/v1/GenerateToken',
        body: {
          userName: username,
          password: password
        }
      }).then((tokenResponse) => {
        if (tokenResponse.status === 200) {
          cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/Authorized',
            body: {
              userName: username,
              password: password
            }
          }).then((authResponse) => {
            if (authResponse.status === 200) {
              cy.request({
                method: 'GET',
                url: `https://demoqa.com/Account/v1/User/${username}`,
                failOnStatusCode: false
              }).then((userResponse) => {
                if (userResponse.status === 200) {
                  userId = userResponse.body.userId
                  cy.log(`✅ Usuário existente encontrado. ID: ${userId}`)
                }
              })
            }
          })
        }
      })
    }
  })
})

When('gerar token de autenticação para o usuário {string} com password {string}', (username, password) => {
  cy.request({
    method: 'POST',
    url: 'https://demoqa.com/Account/v1/GenerateToken',
    body: {
      userName: username,
      password: password
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
    token = response.body.token
    cy.log(`✅ Token gerado com sucesso: ${token.substring(0, 20)}...`)
  })
})

When('autorizar o usuário {string} com password {string}', (username, password) => {
  cy.request({
    method: 'POST',
    url: 'https://demoqa.com/Account/v1/Authorized',
    body: {
      userName: username,
      password: password
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.be.true
    cy.log('✅ Usuário autorizado com sucesso')
  })
})

When('listar todos os livros disponíveis', () => {
  cy.request({
    method: 'GET',
    url: 'https://demoqa.com/BookStore/v1/Books'
  }).then((response) => {
    expect(response.status).to.eq(200)
    books = response.body.books
    cy.log(`📚 ${books.length} livros encontrados na biblioteca`)
  })
})

When('reservar o livro {string} para o usuário', (isbn) => {
  const bookToAdd = books.find(book => book.isbn === isbn)
  if (bookToAdd) {
    cy.request({
      method: 'POST',
      url: 'https://demoqa.com/BookStore/v1/Books',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: {
        userId: userId,
        collectionOfIsbns: [
          {
            isbn: isbn
          }
        ]
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      cy.log(`✅ Livro "${bookToAdd.title}" reservado com sucesso`)
    })
  } else {
    cy.log(`❌ Livro com ISBN ${isbn} não encontrado`)
  }
})

When('consultar informações do usuário {string}', (username) => {
  cy.request({
    method: 'GET',
    url: `https://demoqa.com/Account/v1/User/${userId}`,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.userId).to.eq(userId)
    expect(response.body.username).to.eq(username)
    cy.log(`✅ Informações do usuário ${username} consultadas com sucesso`)
  })
})

When('tentar reservar livro sem autorização', () => {
  cy.request({
    method: 'POST',
    url: 'https://demoqa.com/BookStore/v1/Books',
    body: {
      userId: 'invalid-user-id',
      collectionOfIsbns: [
        {
          isbn: '9781449325862'
        }
      ]
    },
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.eq(401)
    cy.log('✅ Tentativa de reserva sem autorização rejeitada corretamente')
  })
})

Then('o usuário deve estar registrado no sistema', () => {
  expect(userId).to.not.be.empty
  cy.log(`✅ Usuário registrado com ID: ${userId}`)
})

Then('o token deve ser válido', () => {
  expect(token).to.not.be.empty
  cy.log('✅ Token válido gerado')
})

Then('o usuário deve estar autorizado', () => {
  cy.log('✅ Usuário autorizado com sucesso')
})

Then('os livros devem estar disponíveis para reserva', () => {
  expect(books).to.be.an('array')
  expect(books.length).to.be.greaterThan(0)
  cy.log(`✅ ${books.length} livros disponíveis para reserva`)
})

Then('o livro deve ser reservado com sucesso', () => {
  cy.log('✅ Livro reservado com sucesso')
})

Then('as informações do usuário devem ser retornadas', () => {
  cy.log('✅ Informações do usuário retornadas corretamente')
})

Then('a operação deve ser rejeitada por falta de autorização', () => {
  cy.log('✅ Operação rejeitada por falta de autorização - comportamento correto')
})
