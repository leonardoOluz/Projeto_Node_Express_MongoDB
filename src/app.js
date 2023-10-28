import express from "express";

const app = express();

app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: `Senhor dos Aneis`
    },
    {
        id: 2,
        titulo: `Star Trek`
    },
    {
        id: 3,
        titulo: `Hobbit`
    }
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.Js com Juliana');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send(`Livro adicionado com sucesso !`);
});

export default app;