import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Paciente } from '../paciente/paciente';

const randomChar = () => 
{
    let max, min;

    switch (Math.floor(Math.random() * 2)) 
    {
        case 0:
	        min=65;
   	        max= 90;
	        break;
    
        default:
            min=48;
   	        max= 57;
	        break;
    }

    return Math.floor(Math.random() * (max - min) + min);
}
const tokenGenerator = () =>
{
    let token = '';
    for (let i =0; i<5; i++)
        token = token + String.fromCharCode(randomChar())

    return token; 
}


@Injectable()
export class PacientesService 
{
    updateOne(arg0: { token: string; }, paciente: Paciente): Paciente | PromiseLike<Paciente> {
        throw new Error('Method not implemented.');
    }
    deleteOne(arg0: { token: string; }) {
        throw new Error('Method not implemented.');
    }
    getByToken(token: string): Paciente | PromiseLike<Paciente> {
        throw new Error('Method not implemented.');
    }

    constructor(@InjectModel('Paciente') private readonly pacienteModel: Model<Paciente>) { }

    async getAll() {
        return await this.pacienteModel.find().exec();
    }

    async getById(token: string) {
        return await this.pacienteModel.findOne({ token }).exec();
    }

    async getByFono(fonos: string) {
        return await this.pacienteModel.find({ fonos }).exec();
    }
    
    async create(paciente: Paciente) {
        const createdPaciente = new this.pacienteModel(paciente);
        //while true se o token existe se sim vc cria um novo false
        while (true)
        {
            let token = tokenGenerator();
            let x = (await this.getById(token));
            if(!x)
            {
                createdPaciente.token = token;
                createdPaciente.password = `${createdPaciente.fname}${createdPaciente.lname}`;
                createdPaciente.firstLogin = true;
                // createdPaciente.img = 'some image url';
                return await createdPaciente.save();
            }
        }
        
    }

    /* async update(id: string, paciente: Paciente) {
        await this.pacienteModel.update({ _id: id }, paciente).exec();
        return this.getById(id);
    } */

    async update(token: string, paciente: Paciente) {
        await this.pacienteModel.findOneAndUpdate({ token: token }, paciente).exec();
        return this.getById(token);
    }
    
    /*
        async update(token: string, paciente: Paciente) {
        await this.pacienteModel.update({ token: token }, paciente).exec();
        return this.getById(token);
    }
    */ 
    

    async delete(token: string) {
        return await this.pacienteModel.deleteOne({ token: token }).exec();
    }

    
}
    