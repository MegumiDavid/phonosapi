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
            img: 'https://picsum.photos/200',
            token: '00000',
            bday: '2012-09-23',
            condicao: 'Falta de atenção',
            firstLogin: true,
            password: '',
            fonos: ['12345'],
        },
        {
            id: 2, 
            fname: 'Rebecca',
            lname: 'Becka',
            img: 'https://picsum.photos/200',
            token: '00001',
            bday: '2012-06-21',
            condicao: 'Problema na fala',
            firstLogin: true,
            password: '',
            fonos: ['11234'],
        },
        {
            id: 3, 
            fname: 'Lucyna',
            lname: 'Kushinada',
            img: 'https://picsum.photos/200',
            token: '00002',
            bday: '2011-09-20',
            condicao: 'Problema na audicao',
            firstLogin: true,
            password: '',
            fonos: ['12234'],
        },
        {
            id: 4, 
            fname: 'Adam',
            lname: 'Smasher',
            img: 'https://picsum.photos/200',
            token: '00003',
            bday: '2015-09-23',
            condicao: 'Falta de atenção',
            firstLogin: true,
            password: '',
            fonos: ['12345']
        },
        {
            id: 5, 
            fname: 'David',
            lname: 'Megumi',
            img: 'https://picsum.photos/200',
            token: '00004',
            bday: '2012-02-26',
            condicao: 'Problema na fala',
            firstLogin: true,
            password: '',
            fonos: ['12345']
        }
    ];

    getAll() 
    {
        return this.pacientes;
    }
    
    /* getById(id: number)
    {
        const paciente = this.pacientes.find((value) => value.id == id);
        return paciente;
    } */

    getByToken(token: string)
    {
        const paciente = this.pacientes.find((value) => value.token == token);
        return paciente;
    }
    
    /* getByFname(fname: string)
    {
        const paciente = this.pacientes.find((value) => value.fname == fname);
        return paciente;
    } */

    // getPacienteByFono
    

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

    // update fonos is correct?
    update(paciente: Paciente)
    {
        const pacienteArray = this.getByToken(paciente.token);
        if (pacienteArray) {
            pacienteArray.fname = paciente.fname;
            pacienteArray.lname = paciente.lname;
            pacienteArray.img = paciente.img;
            pacienteArray.bday = paciente.bday;
            pacienteArray.condicao = paciente.condicao;
            pacienteArray.firstLogin = paciente.firstLogin;
            pacienteArray.password = paciente.password;
            pacienteArray.fonos = paciente.fonos;
        }
        
        return pacienteArray;
    }

    delete(id: number)
    {
        const index = this.pacientes.findIndex((value) => value.id == id);
        this.pacientes.splice(index, 1);
    }
}
    