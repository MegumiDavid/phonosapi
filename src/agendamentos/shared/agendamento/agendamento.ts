import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'


@Schema()
export class Agendamento extends Document 
{
    @Prop()
    data: string;

    @Prop()
    hora: string;

    @Prop()
    fono: string;

    @Prop()
    paciente: string;
    
    @Prop()
    tipo: string;

    @Prop()
    endereco: String[];
}

export const UserSchema = SchemaFactory.createForClass(Agendamento);