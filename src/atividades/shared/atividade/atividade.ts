import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'


@Schema()
export class Atividade extends Document {
    @Prop()
    titulo: string;

    @Prop()
    entrega: string;

    @Prop()
    isEntregue: string;

    @Prop()
    descricao: string;

    @Prop()
    feedback: string;

    @Prop()
    arquivoPath: string;

    @Prop()
    fono: string;

    @Prop()
    paciente: string;
}


export const UserSchema = SchemaFactory.createForClass(Atividade)