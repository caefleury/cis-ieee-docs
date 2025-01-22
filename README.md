# Objetivos desse guia:

## Conceitos Básicos

A documentação está organizada nos seguintes tópicos principais:

### Diretorias
Informações sobre a estrutura organizacional e responsabilidades das diretorias do CIS-IEEE.

### Operações
Documentação sobre os processos operacionais e fluxos de trabalho.

### Projetos
Detalhes sobre os projetos em andamento e concluídos.

### Engenharia de Dados
Recursos e documentação relacionados à área de Engenharia de Dados.

### Análise de Dados
Guias e documentação sobre análise e visualização de dados.

### Machine Learning
Recursos e documentação sobre projetos e implementações de Machine Learning.

### Recursos
Ferramentas, bibliotecas e recursos úteis para o desenvolvimento.

Este é um repositório de documentação com o objetivo de concentrar todo o conhecimento de _______.

## Como trabalhar no projeto

### 1 - Clone o Projeto

```bash
git clone https://github.com/caefleury/cis-ieee-docs.git
```

### 2 - Instale o retypeapp

+++ npm

```bash
npm install retypeapp --global
```

+++ yarn

```bash
yarn global add retypeapp
```

+++ dotnet

```bash
dotnet tool install retypeapp --global
```

### 3 - Entre em uma das pastas e rode o projeto

Essa documentação está dividida em 3 seções iniciais:

- doc1
- doc2
- doc3

Cada seção destas é uma pasta na raíz do repositório e também é um projeto do retype.
Portanto, entre na pasta que vc deseja realizar sua documentação e rode o projeto.

```bash
cd doc1
retype start
```

Com o projeto rodando, você pode agora escrever sua documentação (mas recomendo que veja antes a seção de "Como se organizar no projeto" neste README) em arquivos markdown, com componentes e padrões do Retype.

Para dúvidas sobre como escrever a documentação, acesse a [documentação do retype](https://retype.com/guides/formatting/).

## Como se organizar no projeto

### Crie sua branch e nomeie-a de forma "adequada"

Para adição de conteúdo à documentação, você pode especificar que sua branch foca no desenvolvimento de uma feature.
Por exemplo, para a adição de documentação sobre alterações feitas no banco, você pode nomear sua branch de:

> feat/diretoria-projetos
Para correção de algo na documentação, você pode agora especificar que sua branch foca em uma fix.
Por exemplo, para correção da documentação de typescript, você pode nomear sua branch de:

> fix/recursos-python

### Padrão de commits

Os commits seguem o padrão dos [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/). Um commit feito para a issue de feat/deploy-banco pode ser feita da seguinte forma:

> feat(diretoiras): <comentario-do-que-foi-feito>

Para correção de algo na documentação, você pode agora especificar que sua branch foca em uma fix.
Por exemplo, para correção da documentação de typescript, você pode nomear sua branch de:

> fix(recursos): <comentario-do-que-foi-feito>

### Crie uma PR com o nome da sua branch e elabore uma descrição explicativa

Finalizado o desenvolvimento, vc pode agora criar uma PR (Pull Request) no GitHub, com o nome da sua branch.

Elabore uma descrição da sua PR, apontando o que foi feito/corrigido, o que faltou fazer (e o por que não fez) e o que pode melhorar.

Por fim, solicite alguém de confiança para revisar sua PR.

Finalizadas as revisões e correções, peça para o revisor aplicar o Merge.

FIM!
