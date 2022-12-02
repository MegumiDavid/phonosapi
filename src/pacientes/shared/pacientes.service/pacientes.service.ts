import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Paciente } from '../paciente/paciente';

const randomChar = () => 
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
        return await this.pacienteModel.find({ token: token }).exec();
    }

    async create(paciente: Paciente) {
        const createdPaciente = new this.pacienteModel(paciente);

        return await createdPaciente.save();
    }

    async update(token: string, paciente: Paciente) {
        await this.pacienteModel.updateOne({ token: token }, paciente).exec();
        return this.getById(token);
    }

    async delete(token: string) {
        return await this.pacienteModel.deleteOne({ token: token }).exec();
    }

    
}
    