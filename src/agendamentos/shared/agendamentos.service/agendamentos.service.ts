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
        let agendamentos = await this.AgendamentoModel.find({ fono: crfa }).exec();
        agendamentos = agendamentos.sort((objA, objB) => 
        ((new Date(  parseInt(objA.data.split('-')[0]),  
                     parseInt(objA.data.split('-')[1]), 
                     parseInt(objA.data.split('-')[2]),
                     parseInt(objA.hora.split(':')[0]),
                     parseInt(objA.hora.split(':')[1])).getTime()) - 
          new Date(  parseInt(objB.data.split('-')[0]),  
                     parseInt(objB.data.split('-')[1]), 
                     parseInt(objB.data.split('-')[2]),
                     parseInt(objB.hora.split(':')[0]),
                     parseInt(objB.hora.split(':')[1])).getTime()));   
        return agendamentos;
    }

    async getByFonoFuturos(crfa: string) {
        const agendamentos = await this.getByFono(crfa);
        let aux = [];
        for (var i = 0; i < agendamentos.length; i++) 
        {
            let dataobj = new Date(agendamentos[i].data);
            let horasobj = parseInt(agendamentos[i].hora.split(':')[0]);
            let minutosobj = parseInt(agendamentos[i].hora.split(':')[1]);
            let compara = new Date(dataobj.getFullYear(), dataobj.getMonth(), dataobj.getDate()+1, horasobj-3, minutosobj)
            if (compara.getTime() >= new Date(Date.now()-10800000).getTime()) aux.push(agendamentos[i]);
        }
        return aux;
    }

    async getByFonoPassados(crfa: string) {
        const agendamentos = await this.getByFono(crfa);
        let aux = [];
        for (var i = 0; i < agendamentos.length; i++) 
        {
            let dataobj = new Date(agendamentos[i].data);
            let horasobj = parseInt(agendamentos[i].hora.split(':')[0]);
            let minutosobj = parseInt(agendamentos[i].hora.split(':')[1]);
            let compara = new Date(dataobj.getFullYear(), dataobj.getMonth(), dataobj.getDate()+1, horasobj-3, minutosobj)
            if (compara.getTime() <= new Date(Date.now()-10800000).getTime()) aux.push(agendamentos[i]);
        }
        return aux;
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
