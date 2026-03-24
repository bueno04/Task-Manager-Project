# Aula completa de Node.js e React com foco no projeto

Este material foi feito para você entender o que está acontecendo no código e conseguir explicar o projeto em entrevista.

## 1. O que é Node.js?
Node.js é um ambiente que permite rodar JavaScript fora do navegador. No projeto, usamos Node para criar o backend, subir o servidor e tratar as requisições.

## 2. O que é Express?
Express é um framework para Node.js que facilita criar rotas e APIs.

Exemplo:
```js
app.get("/tasks", (req, res) => {
  res.json([{ title: "Study Node" }]);
});
```

## 3. O que é API REST?
É um padrão de comunicação entre cliente e servidor.
- GET = buscar
- POST = criar
- PUT = atualizar
- DELETE = excluir

No projeto:
- GET /tasks
- POST /tasks
- PUT /tasks/:id
- DELETE /tasks/:id

## 4. Estrutura do backend
- `server.js`: inicia o servidor
- `routes`: define endpoints
- `controllers`: contém a lógica
- `middleware`: executa funções intermediárias, como autenticação
- `data`: persistência em arquivo JSON

## 5. O que é JWT?
JWT é um token usado para autenticação.

Fluxo:
1. usuário faz login
2. backend valida email e senha
3. backend gera token
4. frontend salva token
5. token é enviado nas próximas requisições

Header:
```text
Authorization: Bearer token_aqui
```

## 6. O que é bcrypt?
É usado para comparar senhas com segurança.

Exemplo:
```js
bcrypt.compareSync(password, user.password)
```

## 7. Por que usar JSON neste projeto?
Porque é mais simples para estudar e rodar rápido. Em produção, o ideal seria PostgreSQL.

## 8. O que é React?
React é uma biblioteca para criar interfaces com componentes reutilizáveis.

No projeto:
- LoginForm
- TaskForm
- TaskList
- Dashboard

## 9. O que são componentes?
São partes independentes da interface.

Exemplo:
```jsx
function Hello() {
  return <h1>Hello</h1>;
}
```

## 10. O que são props?
Props são dados passados de um componente pai para um filho.

Exemplo:
```jsx
<TaskList tasks={tasks} />
```

## 11. O que é useState?
É um hook para guardar estado.

Exemplo:
```jsx
const [tasks, setTasks] = useState([]);
```

No projeto, usamos para:
- usuário logado
- tarefas
- formulário
- erro de login
- item em edição

## 12. O que é useEffect?
Executa algo quando o componente carrega ou quando algo muda.

Exemplo:
```jsx
useEffect(() => {
  loadTasks();
}, []);
```

## 13. O que é Axios?
Biblioteca para fazer requisições HTTP.

Exemplo:
```js
const response = await api.get("/tasks");
```

## 14. Fluxo completo do sistema

### Login
1. usuário envia email e senha
2. frontend chama POST /auth/login
3. backend valida
4. backend retorna token
5. frontend salva token
6. dashboard é liberado

### Listar tarefas
1. frontend chama GET /tasks
2. token vai no header
3. backend valida token
4. backend devolve tarefas
5. tela atualiza

### Criar tarefa
1. usuário preenche formulário
2. frontend chama POST /tasks
3. backend salva
4. frontend recarrega lista

### Editar
1. usuário clica em editar
2. formulário recebe dados
3. frontend chama PUT /tasks/:id
4. backend atualiza
5. lista recarrega

### Excluir
1. frontend chama DELETE /tasks/:id
2. backend remove
3. lista recarrega

## 15. Como estudar
Leia nesta ordem:
1. `backend/server.js`
2. `backend/src/routes/taskRoutes.js`
3. `backend/src/controllers/taskController.js`
4. `backend/src/controllers/authController.js`
5. `backend/src/middleware/authMiddleware.js`
6. `frontend/src/App.jsx`
7. `frontend/src/pages/Dashboard.jsx`
8. `frontend/src/components/*`

## 16. Como explicar em entrevista

Resposta curta:
"Desenvolvi um sistema fullstack de gerenciamento de tarefas com Node.js, Express e React. Implementei autenticação com JWT, construí uma API REST com operações CRUD e conectei o frontend ao backend usando Axios."

Resposta mais forte:
"Estruturei o backend em rotas, controllers e middleware para melhorar manutenção. No frontend, usei componentes reutilizáveis, hooks para estado e consumo da API com Axios."

## 17. O que revisar de React
- JSX
- componentes
- props
- useState
- useEffect
- formulários
- renderização condicional
- listas com map
- consumo de API

## 18. O que revisar de Node
- Express
- rotas
- controllers
- middleware
- req e res
- status HTTP
- JWT
- REST
- tratamento de erros

## 19. Exercícios para fixar
- adicionar dueDate
- criar filtro por status
- buscar só tarefas high priority
- trocar JSON por PostgreSQL
- criar cadastro de usuário

## 20. Evolução ideal
1. PostgreSQL
2. Deploy
3. AWS
4. Testes
5. CI/CD
6. Docker
