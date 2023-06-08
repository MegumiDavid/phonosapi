import * as mongoose from "mongoose";

export const PacienteSchema = new mongoose.Schema({
    token: String,
    fname: String,
    lname: String,
    sexo: String,
    img: String,
    bday: String,
    condicao: String,
    relatorio: String,
    firstLogin: Boolean,
    password: String,
    fonos: []
});

