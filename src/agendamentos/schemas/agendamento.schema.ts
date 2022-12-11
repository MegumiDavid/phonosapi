import * as mongoose from "mongoose";

export const AgendamentoSchema = new mongoose.Schema({

    data: String,
    inicio: String,
    fim: String,
    fono: String,
    paciente: String,
    tipo: String,
    status: String,
    endereco: String
});
