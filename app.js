// Variavel express importando o pacote express para o arquivo app.js.
const express = require("express");
// Variavel app executando o pacote express importado para o arquivo pela variavel express.
const app = express();

const port = 3000;


// Rota para teste retornando "Hello World".
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log("Estou rodando na porta: " + port);
});
