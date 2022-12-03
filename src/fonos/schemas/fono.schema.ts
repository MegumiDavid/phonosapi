import * as mongoose from "mongoose";

export const FonoSchema = new mongoose.Schema({
    crfa: String,
    fname: String,
    lname: String,
    img: String,
    email: String,
    password: String,
    pacientes: []
});
