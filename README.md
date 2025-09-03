# 🚀 Projeto de Automação de Testes - DemoQA + BookStore API

[![Cypress Tests](https://github.com/lafaietemachado/Desafio---QA-Automation/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/lafaietemachado/Desafio---QA-Automation/actions/workflows/cypress-tests.yml)

## 👨‍💻 **Desenvolvedor**

**Lafaiete Rodrigues Machado**  
*Desenvolvido em Setembro de 2025*

## 📋 **Visão Geral do Projeto**

Este projeto implementa uma suite completa de testes automatizados para o site DemoQA, incluindo testes de API para BookStore e testes de interface para diversas funcionalidades web. O projeto utiliza Cypress como framework principal e segue as melhores práticas de automação de testes.

## 🏗️ **Arquitetura e Tecnologias**

### **✅ Stack Tecnológica**
- **JavaScript** - Linguagem principal
- **Cypress 13.6.0** - Framework de automação
- **Page Object Pattern** - Padrão de arquitetura
- **BDD (Behavior Driven Development)** - Metodologia de desenvolvimento
- **Cypress Mochawesome Reporter** - Gerador de relatórios estruturados

### **✅ Padrões de Projeto**
- **Page Object Pattern** ✅
  - `AlertsFrameWindowsPage.js` - Browser Windows
  - `WebTablesPage.js` - Web Tables
  - `ProgressBarPage.js` - Progress Bar
  - `SortablePage.js` - Sortable Elements
- **Estrutura organizada** ✅
- **Código bem estruturado** ✅
- **Comandos personalizados** ✅

### **✅ Estrutura BDD Completa**
- **Estrutura Given/When/Then** ✅
- **Steps organizados** ✅
- **Cenários descritivos** ✅
- **Logs informativos** ✅
- **Step Definitions implementados** ✅
- **Cucumber Preprocessor configurado** ✅
- **Arquivos .feature funcionais** ✅

### **✅ Relatórios Estruturados**
- **Mochawesome Reporter** ✅ - Relatórios HTML profissionais
- **Vídeos integrados** ✅ - Capturas automáticas nos relatórios
- **Screenshots automáticos** ✅ - Em caso de falha
- **Métricas detalhadas** ✅ - Tempo, status, performance
- **Export HTML** ✅ - Relatórios para análise offline

## 🏗️ **Estrutura do Projeto (Padrão de Mercado)**

### **✅ Organização Profissional:**
- **`api/`** - Testes de API separados e organizados
- **`ui/`** - Testes de Interface organizados por funcionalidade
- **`features/`** - Arquivos BDD para cenários de teste
- **`step-definitions/`** - Implementações dos steps BDD
- **`pages/`** - Page Objects seguindo padrão de mercado
- **`support/`** - Comandos personalizados e configurações

```
cypress-automation-tests/
├── cypress/
│   ├── e2e/
│   │   ├── api/                      # Testes de API
│   │   │   └── bookstore-api.cy.js   # Testes da API BookStore
│   │   ├── ui/                       # Testes de Interface
│   │   │   ├── forms-practice.cy.js  # Testes de formulários
│   │   │   ├── browser-windows.cy.js # Testes de janelas do navegador
│   │   │   ├── web-tables.cy.js      # Testes de tabelas web
│   │   │   ├── progress-bar.cy.js    # Testes de barra de progresso
│   │   │   └── sortable.cy.js        # Testes de elementos sortable
│   │   ├── features/                  # Arquivos de feature BDD
│   │   │   ├── bookstore-flow.feature   # Cenários da API BookStore
│   │   │   ├── forms-practice.feature   # Cenários de formulários
│   │   │   ├── browser-windows.feature  # Cenários de janelas
│   │   │   ├── web-tables.feature       # Cenários de tabelas
│   │   │   ├── progress-bar.feature     # Cenários de progresso
│   │   │   └── sortable.feature         # Cenários de sortable
│   │   └── step-definitions/            # Step definitions BDD
│   ├── pages/                           # Page Objects
│   │   ├── AlertsFrameWindowsPage.js    # Browser Windows
│   │   ├── WebTablesPage.js             # Web Tables
│   │   ├── ProgressBarPage.js           # Progress Bar
│   │   └── SortablePage.js              # Sortable Elements
│   ├── fixtures/
│   │   └── test-file.txt                # Arquivo para upload
│   └── support/
│       ├── commands.js                  # Comandos personalizados
│       └── e2e.js                       # Configurações
├── cypress.config.js                    # Configuração Cypress com reporter
├── cypress.config.ci.js                 # Configuração CI/CD com reporter
├── cypress.config.cucumber.js           # Configuração BDD
├── package.json                         # Dependências
├── .github/
│   └── workflows/
│       └── cypress-tests.yml            # Workflow principal CI/CD
├── cypress/
│   └── reports/                         # Relatórios estruturados
│       └── html/                        # Relatórios HTML
└── README.md                            # Documentação
```

## 🎯 **Funcionalidades Implementadas**

### **1. API BookStore**
- **Criação de usuário** - `POST /Account/v1/User`
- **Geração de token** - `POST /Account/v1/GenerateToken`
- **Autorização de usuário** - `POST /Account/v1/Authorized`
- **Listagem de livros** - `GET /BookStore/v1/Books`
- **Reserva de livros** - `POST /BookStore/v1/Books`
- **Consulta de usuário** - `GET /Account/v1/User/{userID}`

### **2. Formulários de Prática**
- **Navegação** para Forms → Practice Form
- **Preenchimento completo** de formulário
- **Upload de arquivo** (.txt)
- **Validação de popup** de sucesso
- **Fechamento de popup**

### **3. Janelas do Navegador**
- **Navegação** para Alerts, Frame & Windows → Browser Windows
- **Abertura de nova janela** com botão New Window
- **Validação de mensagem** "This is a sample page"
- **Fechamento de janela** e retorno à principal

### **4. Tabelas Web**
- **Navegação** para Elements → Web Tables
- **CRUD completo** (Create, Read, Update, Delete)
- **Criação dinâmica** de 12 registros
- **Remoção sistemática** de todos os registros

### **5. Barra de Progresso**
- **Navegação** para Widgets → Progress Bar
- **Controle preciso** - para antes dos 25%
- **Validação** de valor ≤ 25%
- **Execução completa** até 100%
- **Reset** e validação de volta para 0%

### **6. Elementos Sortable**
- **Navegação** para Interactions → Sortable
- **Reorganização** de elementos na ordem crescente
- **Suporte a abas** List e Grid
- **Drag and drop** individual e em lote

## 🚀 **Como Executar**

### **Instalação**
```bash
npm install
```

### **Executar Testes**
```bash
# Todos os testes
npm run test

# Testes BDD (Cucumber)
npm run test:bdd
npm run test:bdd:open

# Apenas testes de API
npm run test:api

# Apenas testes de UI
npm run test:ui

# Teste específico
npx cypress run --spec "cypress/e2e/ui/sortable.cy.js"

# Teste de API específico
npx cypress run --spec "cypress/e2e/api/bookstore-api.cy.js"

# Teste BDD específico
npx cypress run --spec "cypress/e2e/features/bookstore-flow.feature"

# Modo interativo
npm run cypress:open

# Testes para CI/CD
npm run test:ci
npm run cypress:ci:headless
```

## 🔄 **CI/CD com GitHub Actions**

O projeto está configurado com **workflow otimizado** do GitHub Actions:

### **🔄 Workflow Principal (cypress-tests.yml):**
- ✅ **Execução automática** a cada push/PR
- ✅ **Testes em ambiente Linux** (Ubuntu)
- ✅ **Cache de dependências** para maior velocidade
- ✅ **Upload de screenshots** em caso de falha
- ✅ **Upload de vídeos** para análise
- ✅ **Relatórios automáticos** de execução
- ✅ **Verificação do Cypress** antes da execução
- ✅ **Listagem de arquivos** para debug
- ✅ **Resumo automático** de resultados
- ✅ **Upload de relatórios HTML** estruturados

### **Configuração CI:**
- **Arquivo Principal:** `.github/workflows/cypress-tests.yml` ✅
- **Configuração:** `cypress.config.ci.js` ✅
- **Scripts:** `npm run test:ci` ✅
- **Retry:** 2 tentativas em caso de falha
- **Viewport:** 1280x720 para consistência
- **Vídeos:** Gerados automaticamente
- **Screenshots:** Capturados em caso de falha

## 📊 **Status dos Testes (100% Funcionais)**

```
✅ api/bookstore-api.cy.js                  00:05        3        3        -        -        - 
✅ ui/browser-windows.cy.js                 00:18        1        1        -        -        - 
✅ ui/forms-practice.cy.js                  00:11        1        1        -        -        - 
✅ ui/web-tables.cy.js                      01:14        2        2        -        -        - 
✅ ui/progress-bar.cy.js                    00:26        1        1        -        -        - 
✅ ui/sortable.cy.js                        00:37        3        3        -        -        - 
✅ All specs passed!                        03:04        11       11       -        -        - 
```

- **Status:** ✅ Todos os testes funcionando perfeitamente
- **Cobertura:** 100% das funcionalidades implementadas
- **Estrutura:** BDD + Page Objects + Comandos Personalizados
- **Estabilidade:** Muito alta
- **CI/CD:** ✅ Configuração funcionando perfeitamente
- **Workflows:** ✅ Dois workflows GitHub Actions funcionais
- **Scripts NPM:** ✅ Todos os comandos validados

## 🆕 **Funcionalidades Avançadas**

### **1. Web Tables CRUD Completo**
- ✅ **Create**: Adicionar novos registros
- ✅ **Read**: Buscar e validar registros
- ✅ **Update**: Editar registros existentes
- ✅ **Delete**: Remover registros

### **2. Progress Bar Control**
- ✅ **Monitoramento Inteligente**: Para automaticamente entre 20-25%
- ✅ **Validação Precisa**: Garante que para ANTES dos 25%
- ✅ **Ciclo Completo**: Start → Stop → Start → 100% → Reset
- ✅ **Validação de Reset**: Confirma volta para 0%

### **3. Sortable Elements**
- ✅ **Reorganização Inteligente**: Ordenação automática em ordem crescente
- ✅ **Suporte Multi-aba**: List e Grid
- ✅ **Drag and Drop**: Funcionalidade completa de arrastar e soltar
- ✅ **Validação de Ordem**: Confirma ordenação correta

### **4. Teste de Volume**
- ✅ **12 registros criados** dinamicamente
- ✅ **Todos os registros deletados** sistematicamente
- ✅ **Validação completa** de cada operação

## 🥒 **BDD com Cucumber**

### **✅ Funcionalidades BDD Implementadas:**
- **Step Definitions Completos**: Todos os cenários têm implementação
- **Arquivos .feature Funcionais**: Cenários BDD executáveis
- **Cucumber Preprocessor**: Configurado e funcionando
- **Estrutura Profissional**: Seguindo padrões de mercado

### **📁 Step Definitions Criados:**
- **`bookstore-api.steps.js`** - Steps para testes de API
- **`forms-practice.steps.js`** - Steps para formulários
- **`web-tables.steps.js`** - Steps para tabelas web
- **`progress-bar.steps.js`** - Steps para barra de progresso
- **`sortable.steps.js`** - Steps para elementos sortable
- **`browser-windows.steps.js`** - Steps para janelas do navegador

### **🚀 Execução BDD:**
```bash
# Executar todos os testes BDD
npm run test:bdd

# Abrir Cypress com BDD
npm run test:bdd:open

# Executar feature específica
npx cypress run --spec "cypress/e2e/features/bookstore-flow.feature"
```

## 📦 **Scripts NPM Funcionais**

### **✅ Scripts Principais:**
- **`npm run test`** ✅ - Executa todos os testes
- **`npm run test:api`** ✅ - Executa apenas testes de API
- **`npm run test:ui`** ✅ - Executa apenas testes de UI
- **`npm run test:ci`** ✅ - Executa testes com configuração CI
- **`npm run cypress:ci:headless`** ✅ - Executa CI em modo headless
- **`npm run cypress:open`** ✅ - Abre Cypress em modo interativo

### **✅ Scripts BDD (Cucumber):**
- **`npm run test:bdd`** ✅ - Executa todos os testes BDD
- **`npm run test:bdd:open`** ✅ - Abre Cypress com BDD

### **✅ Scripts de Relatórios:**
- **`npm run test:reports`** ✅ - Executa testes com relatórios estruturados
- **`npm run test:ci:reports`** ✅ - Executa testes CI com relatórios estruturados

### **✅ Configurações:**
- **`cypress.config.js`** ✅ - Configuração padrão com reporter
- **`cypress.config.ci.js`** ✅ - Configuração para CI/CD com reporter
- **`cypress.config.cucumber.js`** ✅ - Configuração para BDD

## 🔧 **Comandos Personalizados**

### **Navegação**
- ✅ **`cy.navigateToDemoQA()`** - Navegação padrão para o site
- ✅ **`cy.navigateToSection()`** - Navegação para seções principais
- ✅ **`cy.navigateToSubmenu()`** - Navegação para submenus

### **Interação**
- ✅ **`cy.fillField()`** - Preenchimento de campos
- ✅ **`cy.clickButton()`** - Clique em botões
- ✅ **`cy.selectRadioOption()`** - Seleção de opções de rádio
- ✅ **`cy.selectCheckbox()`** - Seleção de checkboxes

### **Validação**
- ✅ **`cy.validateText()`** - Validação de texto
- ✅ **`cy.waitAndValidate()`** - Aguardar e validar elementos
- ✅ **`cy.validateSuccessModal()`** - Validação de modal de sucesso

### **Específicos**
- ✅ **`cy.searchRecord()`** - Busca de registros
- ✅ **`cy.uploadFile()`** - Upload de arquivos
- ✅ **`cy.dragAndDrop()`** - Drag and drop entre elementos
- ✅ **`cy.dragAndDropByIndex()`** - Drag and drop por índice

## 🏆 **Diferenciais Técnicos**

1. **Page Object Pattern** - Separação clara de responsabilidades
2. **BDD Structure** - Estrutura Given/When/Then organizada
3. **Cypress 13.6.0** - Versão estável e moderna
4. **Comandos Personalizados** - Reutilização de código
5. **Código Limpo** - Sem comentários desnecessários
6. **Estrutura Profissional** - Padrões de mercado
7. **Testes Completos** - API + Front End + Browser Windows + Web Tables + Progress Bar + Sortable
8. **Upload de Arquivos** - Funcionalidade avançada
9. **Gerenciamento de Janelas** - Funcionalidade avançada
10. **CRUD Web Tables** - Funcionalidade completa de banco de dados
11. **Progress Bar Control** - Controle preciso de progresso
12. **Sortable Elements** - Reorganização inteligente de elementos
13. **Testes de Volume** - Criação e remoção de múltiplos registros
14. **Arquitetura Escalável** - Fácil adição de novas funcionalidades
15. **CI/CD Otimizado** - Workflow único GitHub Actions para máxima eficiência
16. **Workflow Otimizado** - Sem execuções duplicadas, execução única por evento
17. **Relatórios Estruturados** - Mochawesome HTML com vídeos integrados
18. **Upload Automático** - Relatórios HTML no GitHub Actions

## 🔧 **Melhorias Técnicas**

### **1. Otimização de Performance**
- ✅ Comandos personalizados reutilizáveis
- ✅ Estrutura de testes otimizada
- ✅ Execução mais rápida e eficiente

### **2. Monitoramento Inteligente**
- ✅ **Progress Bar**: Para automaticamente no momento ideal
- ✅ **Validação em Tempo Real**: Verifica progresso continuamente
- ✅ **Timeout Otimizado**: Configurado para diferentes cenários

### **3. Manutenibilidade**
- ✅ Código autoexplicativo
- ✅ Estrutura clara e organizada
- ✅ Fácil de entender e modificar

## 📚 **Documentação BDD**

O projeto inclui arquivos de feature para cada funcionalidade:

- **`bookstore-flow.feature`** - Cenários da API BookStore
- **`forms-practice.feature`** - Cenários de formulários
- **`browser-windows.feature`** - Cenários de janelas do navegador
- **`web-tables.feature`** - Cenários de tabelas web
- **`progress-bar.feature`** - Cenários de barra de progresso
- **`sortable.feature`** - Cenários de elementos sortable

## 🎉 **Conclusão**

**Este projeto implementa uma suite completa de testes automatizados com:**

### **✅ Funcionalidades Principais:**
- Testes de API completos para BookStore
- Testes de interface para todas as funcionalidades web
- Navegação e interação com elementos
- Preenchimento de formulários e upload de arquivos
- Gerenciamento de janelas do navegador
- CRUD completo de tabelas web
- Controle preciso de barra de progresso
- Reorganização inteligente de elementos sortable
- Relatórios estruturados HTML com vídeos integrados

### **✅ Qualidade Técnica:**
- Arquitetura Page Object Pattern
- Estrutura BDD organizada
- Comandos personalizados reutilizáveis
- Código limpo e profissional
- Testes estáveis e confiáveis
- Cobertura completa de funcionalidades
- Relatórios profissionais com Mochawesome
- Upload automático de artefatos no CI/CD

### **✅ Execução:**
- Todos os testes passando com sucesso
- Performance otimizada
- Estrutura profissional e escalável
- Monitoramento inteligente de funcionalidades

**Projeto completo, otimizado e pronto para uso em ambiente de produção!** 🚀
