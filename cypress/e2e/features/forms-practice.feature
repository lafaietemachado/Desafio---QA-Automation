Feature: Formulário de Prática
  Como um usuário do sistema
  Eu quero preencher um formulário completo com dados pessoais
  Para poder me registrar no sistema

Scenario: Preenchimento completo do formulário de prática
  Given que eu esteja na página inicial do DemoQA
  When eu acessar a seção "Forms"
  And eu clicar no submenu "Practice Form"
  Then eu devo ver o formulário de prática
  When eu preencher todos os campos obrigatórios
  And eu fazer upload de um arquivo de teste
  And eu submeter o formulário
  Then um popup de sucesso deve ser exibido
  When eu fechar o popup
  Then o formulário deve ser limpo
