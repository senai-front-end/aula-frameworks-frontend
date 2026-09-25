# APIs para Front-end

**API:** API é uma forma de **comunicação entre sistemas**.

## Métodos HTTP

* **GET** → buscar dados
* **POST** → criar dados
* **PUT/PATCH** → atualizar dados
* **DELETE** → excluir dados 

## Endpoint

É o **endereço da API** usado para acessar uma informação.

```text
GET /api/notes
```

## JSON

É um formato usado para **enviar e receber dados**.

```json
{
  "titulo": "Lembretes",
  "texto": "Comprar pão"
}
```

## Back-end

O Back-end:

* Processa as requisições;
* Trabalha com os dados;
* Fornece a API.

## Express.js

**Express.js** é um framework do **Node.js** usado para criar APIs e servidores.

Instalação:

```bash
npm install express
```

## CRUD

CRUD representa as principais operações de uma API:

```text
Create → Criar
Read   → Ler
Update → Atualizar
Delete → Excluir
```

Exemplo da API de notas:

```text
GET    /api/notes      → Listar
POST   /api/notes      → Criar
PUT    /api/notes/:id  → Editar
DELETE /api/notes/:id  → Excluir
```

## data.json

Na atividade, os dados das notas são armazenados em um arquivo:

```text
data.json
```

O Node.js utiliza o `fs` para **ler e salvar os dados**.

## React + API

O React funciona como **Front-end** e utiliza a API para acessar os dados.

```text
React
  ↓
API Express
  ↓
data.json
```

## Deploy

* **Render:** usado para publicar o Back-end/API.
* **Vercel:** usado para publicar o Front-end.

## Postman

O **Postman** é usado para:

* Testar APIs;
* Fazer requisições;
* Ver respostas;
* Documentar endpoints.