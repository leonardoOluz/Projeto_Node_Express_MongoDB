import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao solicitar os livros` });
        }
    };

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livro_Por_Id = await livro.findById(id);
            res.status(200).json(livro_Por_Id);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao solicitar livro por id` });
        }
    };

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;

        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroNovo = await livro.create(livroCompleto);

            res.status(201).json({ message: "Criado com sucesso", livro: livroNovo });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao cadastrar livro` });
        }
    };

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body)
            res.status(201).json("Livro atualizado com sucesso !");
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao atualizar livro` });
        }
    };

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(201).json({ message: "Livro excluído com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao excluir livro` });
        }
    }

    static async listarLivrosPorEditora(req, res) {
        const editora = req.query.editora;
        try {
            const livroEditora = await livro.find({editora: editora});
            res.status(200).json(livroEditora)
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha ao listar livro por editora`});
        }
    }
};

export default LivroController;