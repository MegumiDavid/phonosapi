import { Injectable } from '@nestjs/common';
import { Paciente } from '../paciente/paciente';

@Injectable()
export class PacientesService 
{
    pacientes: Paciente[] = [
        {
            id: 1, 
            fname: 'David',
            lname: 'Martinez',
            img: 'https://picsum.photos/200/300',
            token: '12345',
            bday: '2022-09-23',
            condicao: 'Falta de atenção'
        },
        {
            id: 2, 
            fname: 'Rebecca',
            lname: 'Becka',
            img: 'https://picsum.photos/200/300',
            token: '12345',
            bday: '2022-09-23',
            condicao: 'Falta de atenção'
        },
        {
            id: 3, 
            fname: 'Lucyna',
            lname: 'Kushinada',
            img: 'https://picsum.photos/200/300',
            token: '12345',
            bday: '2022-09-23',
            condicao: 'Falta de atenção'
        },
        {
            id: 4, 
            fname: 'Adam',
            lname: 'Smasher',
            img: 'https://picsum.photos/200/300',
            token: '12345',
            bday: '2022-09-23',
            condicao: 'Falta de atenção'
        }
    ];

    getAll() 
    {
        return this.pacientes;
    }

    getById(id: number)
    {
        const paciente = this.pacientes.find((value) => value.id == id);
        return paciente;
    }
    
    getByFname(fname: string)
    {
        const paciente = this.pacientes.find((value) => value.fname == fname);
        return paciente;
    }
    

    create(paciente: Paciente)
    {
        let lastId = 0;
        if (this.pacientes.length > 0) {
            lastId = this.pacientes[this.pacientes.length - 1].id;
        }

        paciente.id = lastId++;
        this.pacientes.push(paciente);

        return paciente;
    }

    update(paciente: Paciente)
    {
        const pacienteArray = this.getById(paciente.id);
        if (pacienteArray) {
            pacienteArray.fname = paciente.fname;
            pacienteArray.lname = paciente.lname;
            pacienteArray.img = paciente.img;
            pacienteArray.bday = paciente.bday;
            pacienteArray.condicao = paciente.condicao;
        }
        return pacienteArray;
    }

    delete(id: number)
    {
        const index = this.pacientes.findIndex((value) => value.id == id);
        this.pacientes.splice(index, 1);
    }
}
    