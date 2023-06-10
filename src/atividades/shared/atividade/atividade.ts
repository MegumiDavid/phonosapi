import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'


@Schema()
export class Atividade extends Document {
    @Prop()
    token: string;

    @Prop()
    fname: string;

    @Prop()
    lname: string;

    @Prop()
    sexo: string;

    @Prop()
    img: string;

    @Prop()
    bday: string;

    @Prop()
    condicao: string;

    @Prop()
    relatorio: string;

    @Prop()
    firstLogin: boolean;

    @Prop()
    password: string;

    @Prop()
    fonos: String[];
}


export const UserSchema = SchemaFactory.createForClass(Atividade)