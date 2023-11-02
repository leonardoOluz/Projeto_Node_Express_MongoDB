import express from "express";
import dataBaseConection from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await dataBaseConection();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conection successfully !");
});



const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.Js com Juliana');
});

app.get('/livros',  async(req, res) => {
    const listaLivros = await livro.find({})
    res.status(200).json(listaLivros);
});

app.get('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    res.status(200).json(livros[index]);
});

app.put('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(201).json(livros);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send(`Livro adicionado com sucesso !`);
});

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send(`Livros deletado com sucesso!`);
});


export default app;