import * as mongoose from "mongoose";

export const AgendamentoSchema = new mongoose.Schema({

    data: String,
    hora: String,
    isSemanal: String,
    isOnline: String,
    fono: String,
    paciente: String,
    isOver: String,
    endereco: []
});
