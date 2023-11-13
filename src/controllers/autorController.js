import { autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores(req, res, next) {
    try {
      const listaAutor = await autor.find({});
      res.status(200).json(listaAutor);
    } catch (error) {
      next(error);
    }
  }

  static async listarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      const autor_Por_Id = await autor.findById(id);
      if (autor_Por_Id !== null) {
        res.status(200).json(autor_Por_Id);
      } else {
        res.status(404).json({message: "Id não localizado."});
      }
    } catch (error) {
      next(error);
    }
  }

  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(201).json("Autor atualizado com sucesso !");
    } catch (error) {
      next(error);
    }
  }

  static async excluirAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(201).json({ message: "Autor excluído com sucesso!" });
    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;