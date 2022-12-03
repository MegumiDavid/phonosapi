import * as mongoose from "mongoose";

export const AgendamentoSchema = new mongoose.Schema({

    data: String,
    hora: String,
    fono: String,
    paciente: String,
    tipo: String,
    endereco: String
});
