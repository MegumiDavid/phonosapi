import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'


@Schema()
export class Agendamento extends Document 
{
    @Prop()
    data: string;

    @Prop()
    inicio: string;

    @Prop()
    fim: string;

    @Prop()
    fono: string;

    @Prop()
    paciente: string;
    
    @Prop()
    tipo: string;

    @Prop()
    endereco: string;
}

export const UserSchema = SchemaFactory.createForClass(Agendamento);