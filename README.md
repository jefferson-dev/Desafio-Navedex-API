## Desafio de back-end - Navedex API 

## O projeto

#### O sistema consiste em um criador de navedex's, nele tu poderá se cadastrar utilizando email e senha, e então ao logar terá acesso ao banco de dados dos seus navers, possuindo informações como: nomes, data de nascimento, cargos, tempo de empresa e projetos que participou.

## Funções

  * Autenticação

      - (Signup) Rota de cadastro 
        - Deverá receber email e senha e criar novo registro no banco

      - (Login) Rota para poder logar no sistema
        - Deverá retornar um token [JWT](https://jwt.io/) para o usuário ter acesso à outras rotas

  * Navers

    - (Index) Rota para listagem dos Navers.

    - (Show) Rota para detalhar informações de um único naver através de seu identificador

    - (Store) Rota de Criação de Naver

    - (Update) Rota Para Atualização de Naver

    - (Delete) Rota Para Deletar um Naver

  * Projetos

    - (Index) Rota para listagem dos Projetos

    - (Show) Rota para detalhar um projeto

    - (Store) Rota de Criação de Projeto

    - (Update) Rota Para Atualização de Projeto

    - (Delete) Rota Para Deletar um Projeto

## Execução o projeto

No projeto foram utilizando NodeJS, Typescript, Express, TypeORM, JsonWebToken, Bcrypt e SQLite.

Obs.: É possivel a utilização de PostgreSQL instalando dependencia `yarn add pg` ou `npm -i pg`

Sistema segue uma arquitetura baseada nos principios DDD.

### Pré-requisitos

**[Git](https://git-scm.com)**, 
**[Node.js](https://nodejs.org/en/)**,
**[VSCode](https://code.visualstudio.com/)**.

#### Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/jefferson-dev/Desafio-Navedex-API.git

# Acesse a pasta do projeto 
$ cd Desafio-Navedex-API

# Instale as dependências
$ yarn
# ou
$ npm install

# Edite o arquivo .env com as informações do seu banco de dados

# Rode as migrations para criar as tabelas em seu banco de dados.
$ yarn typeorm migration:run
# ou
$ npm run typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ yarn dev
# ou
$ npm run dev

# O servidor inciará na porta:3333 podendo ser alterada - acesse http://localhost:3000

```

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
 
([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[TypeORM](https://typeorm.io/)**
-   **[ts-node-dev](https://www.npmjs.com/package/ts-node-dev)**
-   **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**
-   **[bcrypt](https://www.npmjs.com/package/bcrypt)**
-   **[dotENV](https://www.npmjs.com/package/dotenv)**

## Arquivo Insomnia para teste

- **[Documentação Insomnia](https://navedexs.vercel.app/)**

* Ou se preferir faça download do arquivo e importe em seu Insomnia.

- [Aquivo Insominia](./Insomnia_Navedex.json)

## Dificuldades 

1. Fazer com o que o sistema filtrasse com parte do valor e não o valor completo.
2. Relacionar as tabelas pivô entre si.
3. Retorna error no cadastro caso os id dos projects ou navers fossem invalido.
