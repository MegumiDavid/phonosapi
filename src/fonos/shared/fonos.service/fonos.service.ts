import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fono } from '../fono/fono';

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
const crfaGenerator = () =>
{
    let crfa = '';
    for (let i =0; i<8; i++)
        crfa = crfa + String.fromCharCode(randomChar())

    return crfa; 
}


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
        return await this.FonoModel.find({ crfa: crfa }).exec();
    }
    
    async create(fono: Fono) {
        const createdFono = new this.FonoModel(fono);
        //while true se o crfa existe se sim vc cria um novo false
        while (true)
        {
            let crfa = crfaGenerator();
            let x = (await this.getById(crfa)).length;
            if(x == 0)
            {
                createdFono.crfa = crfa;
                createdFono.password = '';
                createdFono.img = 'some image url';
                return await createdFono.save();
            }
        }
        
    }

    /* async update(id: string, Fono: Fono) {
        await this.FonoModel.update({ _id: id }, Fono).exec();
        return this.getById(id);
    } */

    async update(crfa: string, fono: Fono) {
        await this.FonoModel.findOneAndUpdate({ crfa: crfa }, fono).exec();
        return this.getById(crfa);
    }
    
    /*
        async update(crfa: string, Fono: Fono) {
        await this.FonoModel.update({ crfa: crfa }, Fono).exec();
        return this.getById(crfa);
    }*/
    
    

    async delete(crfa: string) {
        return await this.FonoModel.deleteOne({ crfa: crfa }).exec();
    }
  
    
}
    