Feature: Elementos Sortable
  Como um usuário do sistema
  Eu quero reorganizar elementos usando drag and drop
  Para poder ordenar itens na ordem desejada

Scenario: Reorganizar elementos na ordem crescente
  Given que eu esteja na página inicial do DemoQA
  When eu acessar a seção "Interactions"
  And eu clicar no submenu "Sortable"
  Then eu devo ver a lista de elementos sortable
  When eu reorganizar os elementos na ordem crescente usando drag and drop
  Then os elementos devem estar ordenados corretamente

Scenario: Reorganizar elementos da grade
  Given que eu esteja na página inicial do DemoQA
  When eu acessar a seção "Interactions"
  And eu clicar no submenu "Sortable"
  And eu mudar para a aba "Grid"
  Then eu devo ver os elementos da grade
  When eu reorganizar os elementos da grade na ordem crescente
  Then os elementos da grade devem estar ordenados corretamente

Scenario: Testar drag and drop individual
  Given que eu esteja na página inicial do DemoQA
  When eu acessar a seção "Interactions"
  And eu clicar no submenu "Sortable"
  Then eu devo ver a lista de elementos sortable
  When eu mover um elemento individual usando drag and drop
  Then a ordem dos elementos deve ser alterada
