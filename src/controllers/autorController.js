import {autor} from "../models/Autor.js";

class AutorController {

  static async listarAutores(req, res) {
    try {
      const listaAutor = await autor.find({});
      res.status(200).json(listaAutor);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao solicitar o Autor` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autor_Por_Id = await autor.findById(id);
      res.status(200).json(autor_Por_Id);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao solicitar autor por id` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao cadastrar autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(201).json("Autor atualizado com sucesso !");
    } catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao atualizar Autor`});            
    }
  }

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(201).json({message: "Autor excluído com sucesso!"});            
    } catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao excluir autor`});
    }
  }
}

export default AutorController;