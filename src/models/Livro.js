import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { 
    type: mongoose.Schema.Types.String, 
    required: [true, "O titulo do Livro é obrigatório"] 
  },
  editora: { 
    type: mongoose.Schema.Types.String ,
    required:[true, "Editora é obrigatório"] 
  },
  preco: { type: Number },
  paginas: { type: Number },
  autor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "autores", 
    required: [true, "O autor é obrigatório"] 
  }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;