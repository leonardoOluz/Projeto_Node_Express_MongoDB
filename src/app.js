import express from "express";
import dataBaseConection from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await dataBaseConection();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conection successfully !");
});

const app = express();
routes(app);

app.get('/', (req, res) => {
    
    res.status(200).send('Curso de Node.Js com Juliana');
});

app.put('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(201).json(livros);
});

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send(`Livros deletado com sucesso!`);
});


export default app;