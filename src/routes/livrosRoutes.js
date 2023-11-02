import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarLivrosPorId)
    .post("/livros", LivroController.cadastrarLivro)

export default routes;