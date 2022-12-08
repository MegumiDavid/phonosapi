import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agendamento } from '../agendamento/agendamento';

@Injectable()
export class AgendamentosService 
{
    updateOne(arg0: { fono: string; }, agendamento: Agendamento): Agendamento | PromiseLike<Agendamento> {
        throw new Error('Method not implemented.');
    }
    deleteOne(arg0: { id: string; }) {
        throw new Error('Method not implemented.');
    }
    getByfono(fono: string): Agendamento | PromiseLike<Agendamento> {
        throw new Error('Method not implemented.');
    }

    constructor(@InjectModel('Agendamento') private readonly AgendamentoModel: Model<Agendamento>) { }

    async getAll() {
        return await this.AgendamentoModel.find().exec();
    }

    async getByFono(crfa: string) {
        return await this.AgendamentoModel.find({ fono: crfa }).exec();
    }

    async getByPaciente(token: string) {
        return await this.AgendamentoModel.find({ paciente: token }).exec();
    }

    async getById(id: string) {
        return await this.AgendamentoModel.find({ _id: id }).exec();
    }

    async update(id: string, agendamento: Agendamento) {
        await this.AgendamentoModel.findOneAndUpdate({ _id: id }, agendamento).exec();
        return this.getById(id);
    }
    
    async create(agendamento: Agendamento) {
        const createdAgendamento = new this.AgendamentoModel(agendamento);
        return await createdAgendamento.save();
    }

    async delete(id: string) {
        return await this.AgendamentoModel.deleteOne({ _id: id }).exec();
    }
}
