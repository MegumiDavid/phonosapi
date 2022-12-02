import { Document } from 'mongoose'

export class Paciente extends Document {
    token: string;
    fname: string;
    lname: string;
    img: string;
    bday: string;
    condicao: string;
    firstLogin: boolean;
    password: string;
    fonos: String[];
}
