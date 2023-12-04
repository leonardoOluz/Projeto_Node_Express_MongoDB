import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autor } from "../models/index.js";

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
        next(new NaoEncontrado("Id do Autor(a) não foi localizado."));
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
      const autorUpdate = await autor.findByIdAndUpdate(id, req.body);
      if (autorUpdate != null) {
        res.status(201).json("Autor atualizado com sucesso !");
      } else {
        next(new NaoEncontrado("Autor(a) não foi localizado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async excluirAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorDelete = await autor.findByIdAndDelete(id);
      if (autorDelete != null) {
        res.status(201).json({ message: "Autor excluído com sucesso!" });        
      } else {
        next(new NaoEncontrado("Autor(a) não foi localizado"));
      }
    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;