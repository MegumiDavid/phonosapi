import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fono } from '../fono/fono';

@Injectable()
export class FonosService 
{
    updateOne(arg0: { crfa: string; }, fono: Fono): Fono | PromiseLike<Fono> {
        throw new Error('Method not implemented.');
    }
    deleteOne(arg0: { crfa: string; }) {
        throw new Error('Method not implemented.');
    }
    getBycrfa(crfa: string): Fono | PromiseLike<Fono> {
        throw new Error('Method not implemented.');
    }

    constructor(@InjectModel('Fono') private readonly FonoModel: Model<Fono>) { }

    async getAll() {
        return await this.FonoModel.find().exec();
    }

    async getById(crfa: string) {
        return await this.FonoModel.findOne({ crfa }).exec();
    }

    async getByEmail(email: string) {
        return await this.FonoModel.findOne({ email }).exec();
    }
    
    async create(fono: Fono) {
        const createdFono = new this.FonoModel(fono);
        return await createdFono.save();
    }

    async update(crfa: string, fono: Fono) {
        await this.FonoModel.findOneAndUpdate({ crfa }, fono).exec();
        return this.getById(crfa);
    }
    
    async delete(crfa: string) {
        return await this.FonoModel.deleteOne({ crfa }).exec();
    }
  
    
}
    