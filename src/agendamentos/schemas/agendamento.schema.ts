import * as mongoose from "mongoose";

export const AgendamentoSchema = new mongoose.Schema({

    data: String,
    hora: String,
    isSemanal: Boolean,
    isOnline: Boolean,
    fono: String,
    paciente: String,
    isOver: Boolean,
    endereco: []
});
