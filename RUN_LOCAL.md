# Como Rodar a Aplicação Aylla Localmente

## Pré-requisitos
- Node.js (versão 18 ou superior)
- Python 3.8+
- MongoDB (local ou MongoDB Atlas)

## Instalação e Execução

### 1. Backend (FastAPI)

```bash
# Navegar para o diretório do backend
cd backend

# Instalar dependências Python
pip install -r requirements.txt

# Configurar variáveis de ambiente (copie .env.example para .env e ajuste)
# cp .env.example .env

# Executar o servidor
python -m uvicorn server:app --reload
```
O backend estará disponível em: http://localhost:8000

### 2. Frontend (React)

```bash
# Navegar para o diretório do frontend  
cd frontend

# Instalar dependências Node.js
npm install --legacy-peer-deps

# Configurar variáveis de ambiente (copie .env.example para .env.local e ajuste)
# cp .env.example .env.local

# Executar o servidor de desenvolvimento
npm start
```
O frontend estará disponível em: http://localhost:3000

### 3. Execução Rápida (Ambos os Serviços)

Para executar ambos os serviços simultaneamente, você pode usar dois terminais:

**Terminal 1 - Backend:**
```bash
cd backend && python -m uvicorn server:app --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend && npm start
```

## Testes

### Testes do Backend
```bash
cd backend
python ../backend_test.py
```

### Testes do Frontend
```bash
cd frontend
npm test
```

## Configuração do MongoDB

A aplicação requer uma conexão com MongoDB. Você pode:

1. **MongoDB Local**: Instale o MongoDB Community Server
2. **MongoDB Atlas**: Use a nuvem gratuita
3. **Docker**: `docker run -d -p 27017:27017 --name mongodb mongo:latest`

Configure a URL do MongoDB no arquivo `backend/.env`:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=aylla_db
```

## Estrutura da Aplicação

- **Backend**: FastAPI com MongoDB (porta 8000)
- **Frontend**: React com craco e TailwindCSS (porta 3000) 
- **API**: Endpoints disponíveis em `/api/*`

## Troubleshooting

### Problemas comuns:

1. **Erro de dependências**: Use `--legacy-peer-deps` no npm install
2. **Porta ocupada**: Verifique se as portas 3000 e 8000 estão livres
3. **MongoDB não conectado**: Verifique se o MongoDB está rodando
4. **Variáveis de ambiente**: Certifique-se de configurar os arquivos .env

### Comandos úteis:

```bash
# Verificar processos nas portas
netstat -ano | findstr :3000
netstat -ano | findstr :8000

# Parar processos
taskkill /PID <PID> /F
```

## URLs de Acesso

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **Backend Docs**: http://localhost:8000/docs (Swagger UI)
