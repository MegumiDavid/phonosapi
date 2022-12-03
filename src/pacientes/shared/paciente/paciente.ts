import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

const randomCharUnicode = () => 
{
    let max, min;

    switch (Math.floor(Math.random() * 3)) 
    {
        case 0:
	        min=48;
   	        max= 57;
	        break;

        case 1:
	        min=65;
   	        max= 90;
	        break;
    
        default:
            min=97;
   	        max= 122;
	        break;
    }

    return Math.floor(Math.random() * (max - min) + min);
}

@Schema()
export class Paciente extends Document {
    @Prop({ default: String.fromCharCode(randomCharUnicode()) })
    token: string;

    @Prop()
    fname: string;

    @Prop()
    lname: string;

    @Prop()
    img: string;
    
    @Prop()
    bday: string;

    @Prop()
    condicao: string;

    @Prop({ default: true })
    firstLogin: boolean;

    @Prop({ default: '' })
    password: string;

    @Prop()
    fonos: String[];
}


export const UserSchema = SchemaFactory.createForClass(Paciente)