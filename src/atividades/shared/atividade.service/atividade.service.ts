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

}
