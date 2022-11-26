# API Aeroportos

![Capa do Projeto](https://www.astera.com/wp-content/uploads/2020/01/rest.png)

# Sobre o Projeto

O objetivo desse projeto é o desenvolvimento de uma API REST que forneça os dados no formato json, para gerenciar o cadastro de aeroportos espalhados pelo mundo todo. O projeto tem como fonte de dados a listagem de aeroportos do website Openflights, e esta API tem como finalidade possibilitar o usuário executar as ações de visualizar todos os aeroportos da listagem, editar os dados de um aeroporto escolhido, inserir um novo aeroporto ao banco de dados, deletar um aeroporto selecionado, e pesquisar um aeroporto específico.

## Server

### Sobre
    Webservice criado em Node.js com a finalidade de expor uma API ao frontend. 

### Dependências
    Os projetos client e server possuem como prerequisito a instalação do gerenciador de pacotes npm.

    Após a instalação do npm é necessário instalar o npx como abaixo:

```
    npm i -g npx
```

### API

|HTTP| URL  | Descrição  | 
|---|---|---|
| GET  | /api/v1/aeroportos  | Obter todos os aeroportos.| 
| GET  |  /api/v1/aeroportos/{iata} | Obter um aeroporto pelo código aeroportuário IATA. |  
| POST | /api/v1/aeroportos | Adicionar um novo aeroporto |  
| PUT | /api/v1/aeroportos/{iata} | Atualizar um aeroporto existente.|  
| DELETE | /api/v1/aeroportos/{iata} | Excluir um aeroporto.|  


### Como instalar

    cd server 
    npm i

### Como executar

    cd server 
    npx nodemon airport.js

## Client

### Sobre

    Frontend provido por serviço node.js desenvolvido em javascript e html para permitir o consumo da API exposta pelo server. 

### Como instalar

    cd client 
    npm i

### Como executar

    cd client 
    npx nodemon index.js


# Índice/Sumário

* [Sobre](#sobre-o-projeto)
* [Sumário](#índice/sumário)
* [Requisitos Funcionais](#requisitos-funcionais)
* [Tecnologias Usadas](#tecnologias-usadas)
* [Contribuição](#contribuição)
* [Autores](#autores)
* [Licença](#licença)
* [Agradecimentos](#agradecimentos)


# Requisitos Funcionais 

- [x] Cadastrar novo item
- [x] Editar item existente
- [x] Visualizar todos os itens
- [x] deletar item existente
- [x] pesquisar item específico

# Tecnologias Usadas

- [Node.js](https://nodejs.org/en/)
- [NPX](https://www.npmjs.com/package/npx)
- [Sqlite](https://www.sqlite.org/index.html)
- [JavaScript](https://www.javascript.com/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

# Contribuição

Leia o arquivo [CONTRIBUTING.md](CONTRIBUTING.md) para saber detalhes sobre o nosso código de conduta e o processo de envio de solicitações *pull* (*Pull Request*) para nós.

# Autores

* Andrey Rodriguez
* Bruno Gomçalves
* Bruno Henrique
* Gabriel Lucas
* Heloísa Torres
* Maria Victória Fonseca

# Licença

Este projeto está licenciado sob a Licença MIT,  consulte o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

# Agradecimentos

Gostaríamos de agadecer a todos os colegas de turma que contribuiram com o aprendizado desse semestre, e ao professor Diego que nos ensinou muito.