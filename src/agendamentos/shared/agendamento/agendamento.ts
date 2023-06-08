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
    isSemanal: boolean;

    @Prop()
    isOnline: boolean;

    @Prop()
    fono: string;

    @Prop()
    paciente: string;

    @Prop()
    isOver: boolean;

    @Prop()
    endereco: String[];
}

export const UserSchema = SchemaFactory.createForClass(Agendamento);