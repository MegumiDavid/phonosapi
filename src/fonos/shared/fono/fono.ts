import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'


@Schema()
export class Fono extends Document 
{
    @Prop()
    crfa: string;

    @Prop()
    fname: string;

    @Prop()
    lname: string;

    @Prop()
    img: string;
    
    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    pacientes: String[];
}

export const UserSchema = SchemaFactory.createForClass(Fono);