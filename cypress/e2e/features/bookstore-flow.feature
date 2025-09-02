Feature: Fluxo da API BookStore
  Como um usuário do sistema
  Eu quero criar uma conta, autorizar-me, listar livros e reservar exemplares
  Para poder gerenciar minha biblioteca pessoal

Scenario: Registro completo do usuário e fluxo de reserva de livros
  Given que eu tenha credenciais de usuário válidas
  When eu criar uma nova conta de usuário
  And eu gerar um token de acesso
  Then o usuário deverá ser autorizado
  When eu listar os livros disponíveis
  And eu reservar dois livros da minha escolha
  Then eu devo ver os detalhes do usuário com os livros reservados

Scenario: Validação de usuário não autorizado
  Given que eu tenha credenciais de usuário inválidas
  When eu tentar autorizar o usuário
  Then o usuário não deverá ser autorizado

Scenario: Tentativa de reserva sem autorização
  Given que eu não tenha autorização válida
  When eu tentar reservar um livro
  Then a reserva deverá ser negada
