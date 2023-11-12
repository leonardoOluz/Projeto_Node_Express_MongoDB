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

export default app;