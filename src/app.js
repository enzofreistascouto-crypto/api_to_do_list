
const http = require('http');

// Importa as rotas
const taskRoutes = require('./routes/taskRoutes');

// Cria servidor
const server = http.createServer((req, res) => {

    // Define cabeçalho JSON
    res.setHeader('Content-Type', "application/json");

    // Chama o roteador
    taskRoutes(req, res);
});

// Porta
//const PORT = 3000;

// Inicia servidor
server.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});
