# John Deere Style Fullstack Task Manager

Projeto fullstack pensado para portfólio e estudo, alinhado com vagas de Software Engineer.

## O que o projeto demonstra
- Node.js
- React
- REST APIs
- Autenticação com JWT
- CRUD completo
- Integração frontend + backend
- Estrutura organizada

## Tecnologias

### Backend
- Node.js
- Express
- JWT
- bcryptjs
- uuid
- CORS
- Morgan

### Frontend
- React
- Vite
- Axios

## Estrutura
```text
jd_project/
  backend/
  frontend/
  README.md
  AULA_NODE_REACT.md
```

## Como rodar

### Backend
```bash
cd backend
npm install
node server.js
```

Backend em:
```text
http://localhost:3001
```

### Frontend
Em outro terminal:
```bash
cd frontend
npm install
npm run dev
```

Frontend em:
```text
http://localhost:5173
```

## Login demo
```text
email: miguel@example.com
senha: 123456
```

## Rotas da API

### Auth
- POST /auth/login

### Tasks
- GET /tasks
- GET /tasks/:id
- POST /tasks
- PUT /tasks/:id
- DELETE /tasks/:id

## Exemplo para criar tarefa
```json
{
  "title": "Study React",
  "description": "Review components, props and hooks",
  "status": "To Do",
  "priority": "High"
}
```
## Melhorias futuras
- Trocar JSON por PostgreSQL
- Fazer deploy
- Integrar AWS
- Adicionar testes
- Criar CI/CD
