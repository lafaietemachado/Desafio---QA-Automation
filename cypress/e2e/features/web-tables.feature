Feature: Tabelas Web
  Como um usuário do sistema
  Eu quero gerenciar registros em uma tabela web
  Para poder organizar e manipular dados de usuários

Scenario: CRUD completo de registro na tabela
  Given que eu esteja na página inicial do DemoQA
  When eu acessar a seção "Elements"
  And eu clicar no submenu "Web Tables"
  Then eu devo ver a tabela web
  When eu criar um novo registro
  And eu editar o registro criado
  And eu deletar o registro editado
  Then o registro deve ser removido da tabela

Scenario: Criação e remoção de múltiplos registros
  Given que eu esteja na página inicial do DemoQA
  When eu acessar a seção "Elements"
  And eu clicar no submenu "Web Tables"
  Then eu devo ver a tabela web
  When eu criar 12 novos registros de forma dinâmica
  Then todos os registros devem ser exibidos na tabela
  When eu deletar todos os registros criados
  Then a tabela deve estar vazia
