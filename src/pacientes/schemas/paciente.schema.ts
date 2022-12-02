import * as mongoose from "mongoose";

export const PacienteSchema = new mongoose.Schema({
    token: String,
    fname: String,
    lname: String,
    img: String,
    bday: String,
    condicao: String,
    firstLogin: Boolean,
    password: String,
    fonos: []
});

