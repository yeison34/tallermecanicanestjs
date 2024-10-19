import { IsNotEmpty, IsDate, IsNumber,IsEmpty, IsOptional } from 'class-validator';

export class ClienteDto{

    id:number;

    cedula:string;

    nombres:string;

    apellidos:string;

    telefono:string;

    email:string;

    direccion:string;    
}