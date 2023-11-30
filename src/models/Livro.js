import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { 
    type: mongoose.Schema.Types.String, 
    required: [true, "O titulo do Livro é obrigatório"] 
  },
  editora: { 
    type: mongoose.Schema.Types.String ,
    required:[true, "Editora é obrigatório"],
    enum:{
      values: ["Casa do codigo", "Alura","Martins Fontes"],
      message:"A editora {VALUE} não é um valor permitido"
    } 
  },
  preco: { type: Number },
  paginas: { 
    type: Number,
    min: [10,"O numero de paginas devem estar entre 10 e 5000. Valor fornecido {VALUE}"],
    max: [5000, "O numero de paginas devem estar entre 10 e 5000. Valor fornecido {VALUE}"] 
  },
  autor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "autores", 
    required: [true, "O autor é obrigatório"] 
  }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;