import { Injectable } from '@nestjs/common';
import { Atividade } from '../atividade/atividade';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AtividadeService {

    constructor(@InjectModel('Atividade') private readonly AtividadeModel: Model<Atividade>) { }

    async create(atividade: Atividade) {
        const createdAtividade = new this.AtividadeModel(atividade);
        return await createdAtividade.save();
    }

    async getByFono(crfa: string) {
        let atividades = await this.AtividadeModel.find({ fono: crfa }).exec();
        atividades = atividades.sort((objA, objB) =>
        ((new Date(parseInt(objA.entrega.split('-')[0]),
            parseInt(objA.entrega.split('-')[1]),
            parseInt(objA.entrega.split('-')[2])
        ).getTime()) -
            new Date(parseInt(objB.entrega.split('-')[0]),
                parseInt(objB.entrega.split('-')[1]),
                parseInt(objB.entrega.split('-')[2])
            ).getTime()));
        return atividades;
    }

    async getByPaciente(token: string) {
        return await this.AtividadeModel.find({ paciente: token }).exec();
    }

    async getById(id: string) {
        return await this.AtividadeModel.find({ _id: id }).exec();
    }

    async update(id: string, atividade: Atividade) {
        await this.AtividadeModel.findOneAndUpdate({ _id: id }, atividade).exec();
        return this.getById(id);
    }

    async delete(id: string) {
        return await this.AtividadeModel.deleteOne({ _id: id }).exec();
    }

}
