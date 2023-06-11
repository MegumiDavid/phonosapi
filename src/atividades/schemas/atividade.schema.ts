import * as mongoose from "mongoose";

export const AtividadesSchema = new mongoose.Schema({
    titulo: String,
    entrega: String,
    isEntregue: String,
    descricao: String,
    feedback: String,
    arquivoPath: String,
    entregaPath: String,
    fono: String,
    paciente: String
});

