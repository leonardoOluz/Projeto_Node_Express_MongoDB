import livro from "../models/Livro.js";

class LivroController {
    
    static async listarLivros(req, res) {
        const listaLivros = await livro.find({})
        res.status(200).json(listaLivros);
    };
    
    static async listarLivrosPorId(req, res) {
        try {
            const id = req.params.id;
            const livro_Por_Id = await livro.findById(id);
            res.status(200).json(livro_Por_Id);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha na conexão`});
        }
    };
    
    static async cadastrarLivro(req, res){
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "Criado com sucesso", livro: novoLivro});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Falha ao cadastrar livro`});
        }
    }
};

export default LivroController;