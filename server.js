import http from "http";

const PORT = 3000;

const rotas = {
    "/": "Curso de Express com mongoDB",
    "/livros": "Entrei na rota Livro",
    "/autores": "Etrei na rota autores"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/plan" });
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("Sevidor escutando");
});