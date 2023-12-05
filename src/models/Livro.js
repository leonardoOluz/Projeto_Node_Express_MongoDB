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
      values: ["Casa do codigo", "Alura","Martins Fontes","Eskeli", "Estante Virtual","Mike Mayhew","Universo dos Livros"],
      message:"A editora {VALUE} não é um valor permitido"
    } 
  },
  preco: { type: Number },
  paginas: { 
    type: Number,
    validate: {
      validator: (valor) => {
        return valor >= 10 && valor <= 5000;       
      },
      message:"O numero de paginas devem estar entre 10 e 5000. Valor fornecido {VALUE}"
    } 
  },
  autor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "autores", 
    required: [true, "O autor é obrigatório"] 
  }
}, { versionKey: false });

const livros = mongoose.model("livros", livroSchema);

export default livros;