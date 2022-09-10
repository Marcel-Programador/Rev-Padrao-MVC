// Variavel express importando o pacote express para o arquivo app.js.
const express = require("express");
// Variavel app executando o pacote express importado para o arquivo pela variavel express.
const app = express();

const port = 3000;


// Rota para teste retornando "Hello World".
// app é a variavel utilizada para utilizar algum recurso do pacote express neste caso o metdodo "get".
// Que realizara uma consulta(req) e retornara(res) a "/" no inicio da estrutura representa a pagina
// raiz "no caso localhost:3000/".
// Ainda sobre esta estrutura o parametro "res" utilizando o metodo "send" ficando "res.send" retornara.
// para o usuario do view a resposta "Hello World".
app.get("/", (req, res) => {
    res.send("Hello World - Home page");
});

// O metodo post retorna uma resposta diferente do GET.
// O GET retorna uma resposta seja VIEW ou um OBJETO, ja o POST retorna um OBJETO.
app.post("/", (req, res) => {
    res.send("Hello World - Post");
});

app.get("/product", (req, res) => {
    // res.send neste caso poderia esta retornando o caminho daq pagina.
    // Exemplo res.send("/product, routeProduct")
    res.send("Bem vindo a pagina produtos");
});

app.get("*", (req, res) => {
    res.send("404 - Not Found");
});
// Outro recurso do express "listem".
// Onde o retorno estamos utilizando para verificar que estamos rodando na porta 3000

app.listen(port, () => {
    console.log("Estou rodando na porta: " + port);
});
