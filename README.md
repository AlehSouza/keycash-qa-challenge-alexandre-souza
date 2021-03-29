# Keycash QA Code Challenge

O desafio consiste em desenvolver testes para essa simples aplicação que lista alguns imóveis de uma api de testes.

## O que vamos avaliar?
Para resolver este problema sugerimos a utilização dos frameworks já instalados no projeto para testes: Jest e Cypress

Tente implementar o máximo que conseguir do teste no tempo determinado, se nÃo conseguir implementar todas as features sugeridas, fique tranquilo, avaliaremos sua solução pelo que foi entregue :)

Iremos avaliar a sua solução pela:

* Organização
* Manutenibilidade
* Entendimento do problema (sua interpretação, bem como seu entendimento a respeito das regras propostas também fazem parte do teste, pois estamos avaliando a forma como você entende e resolve problemas)

## O que deve ser entregue?

Esperamos que você pense em alguns casos de uso desse simples app e implemente alguns testes tanto unitários (jest) quanto integrados (cypress), deste modo temos.

* Testes de componentes individuais para validar suas funcionalidaddes;
* Teste da aplicação como um todo;
* Relátório de cobertura dos testes (gerar com o jest);

### Dicas para o teste

* Um teste já foi desenvolvido com jest em /tests/unit/example.spec.js;
* Um teste já foi desenvolvido com cypress em /tests/e2e/specs/test.js; 


## Setup do projeto
```
npm install
```

### Compila e roda servidor de desenvolvimento
```
npm run serve
```

### Compila e minifica o código para produçåo
```
npm run build
```

### Roda os testes
```
npm run test
```

### Lints and conserta os formatação dos arquivos
```
npm run lint
```

### Roda os testes end-to-end tests
```
npm run test:e2e
```

### Roda os testes unitários
```
npm run test:unit
```

### Referencias para configuração do projeto
See [Configuration Reference](https://cli.vuejs.org/config/).

## Prazo e como entregar
O prazo para a entrega do desafio são **3 dias** a partir da data que você o recebeu.

Para entregá-lo crie um respositório no GitHub ou Bitbcuket. Para facilitar a identificação do seu desafio, nomeie seu repositório para keycash-qa-challenge-{seu-nome} (ex: keycash-qa-john-doe).

Bom teste!
