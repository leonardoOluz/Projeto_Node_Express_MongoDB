import NaoEncontrado from "../erros/NaoEncontrado.js";
import { livro } from "../models/index.js";

class LivroController {

  static async listarLivros(req, res, next) {
    try {
      const listaLivros = await livro.find({}).populate("autor").exec();
      res.status(200).json(listaLivros);
    } catch (error) {
      next(error);
    }
  }

  static async listarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livro_Por_Id = await livro.findById(id);
      if (livro_Por_Id !== null) {
        res.status(200).json(livro_Por_Id);
      } else {
        next(new NaoEncontrado("Id do Livro não foi encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async cadastrarLivro(req, res, next) {
    try {
      const livroNovo = await livro.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", livro: livroNovo });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroUpdate = await livro.findByIdAndUpdate(id, req.body);
      if (livroUpdate !== null) {
        res.status(201).json("Livro atualizado com sucesso !");
      } else {
        next(new NaoEncontrado("Id do Livro não foi encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async excluirLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroDelete = await livro.findByIdAndDelete(id);
      if (livroDelete !== null) {
        res.status(201).json({ message: "Livro excluído com sucesso!" });
      } else {
        next(new NaoEncontrado("Id do Livro não foi encontrado."));
      }
    } catch (error) {
      next(error);
    }
  }

  static async listarLivrosPorFiltro(req, res, next) {
    try {
      const { editora, titulo } = req.query;

      const busca = {};

      const regex = RegExp(titulo, "i");// Usando regex nativo do NodeJs.

      if (editora) busca.editora = { $regex: editora, $options: "i" };// Usando regex do mongoose.
      if (titulo) busca.titulo = regex;

      const livroEditora = await livro.find(busca);
      if (livroEditora.length == []) {
        next(new NaoEncontrado("Livro por editora não encontrado"));
      } else {
        res.status(200).json(livroEditora);
      }
    } catch (error) {
      next(error);
    }
  }
}

export default LivroController;