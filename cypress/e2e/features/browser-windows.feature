Feature: Janelas do Navegador
  Como um usuário do sistema
  Eu quero abrir novas janelas do navegador
  Para poder navegar em diferentes páginas simultaneamente

Scenario: Abertura e validação de nova janela
  Given que eu esteja na página inicial do DemoQA
  When eu acessar a seção "Alerts, Frame & Windows"
  And eu clicar no submenu "Browser Windows"
  Then eu devo ver a página de Browser Windows
  When eu clicar no botão "New Window"
  Then uma nova janela deve ser aberta
  And eu devo ver a mensagem "This is a sample page"
  When eu fechar a nova janela
  Then eu devo retornar para a janela principal
