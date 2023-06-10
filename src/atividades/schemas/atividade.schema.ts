import * as mongoose from "mongoose";

export const AtividadesSchema = new mongoose.Schema({
    titulo: String,
    entrega: String,
    isEntregue: Boolean,
    descricao: String,
    arquivoPath: String,
    fonos: [],
    pacientes: []
});

