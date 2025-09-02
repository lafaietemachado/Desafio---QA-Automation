Feature: Barra de Progresso
  Como um usuário do sistema
  Eu quero controlar uma barra de progresso
  Para poder monitorar e gerenciar processos em andamento

Scenario: Controle da barra de progresso
  Given que eu esteja na página inicial do DemoQA
  When eu acessar a seção "Widgets"
  And eu clicar no submenu "Progress Bar"
  Then eu devo ver a barra de progresso
  When eu clicar no botão "Start"
  And eu parar antes dos 25%
  Then o valor da progress bar deve ser menor ou igual a 25%
  When eu clicar em "Start" novamente
  And eu aguardar até chegar aos 100%
  Then a progress bar deve estar completa
  When eu clicar no botão "Reset"
  Then a progress bar deve voltar para 0%
