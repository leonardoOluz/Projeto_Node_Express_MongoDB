import livro from "../models/Livro.js";

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
      if (livro_Por_Id !== null ) {
        res.status(200).json(livro_Por_Id);        
      } else {
        res.status(404).json({message: "Id não localizado."});
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
      await livro.findByIdAndUpdate(id, req.body);
      res.status(201).json("Livro atualizado com sucesso !");
    } catch (error) {
      next(error);
    }
  }

  static async excluirLivro(req, res, next) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(201).json({ message: "Livro excluído com sucesso!" });
    } catch (error) {
      next(error);
    }
  }

  static async listarLivrosPorEditora(req, res, next) {
    const editora = req.query.editora;
    try {
      const livroEditora = await livro.find({editora: editora});
      res.status(200).json(livroEditora);
    } catch (error) {
      next(error);
    }
  }
}

export default LivroController;