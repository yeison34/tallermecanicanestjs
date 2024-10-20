import { IsEmpty, IsOptional } from "class-validator";

export class EmpleadoDto{
    id:number;
    cedula:string;
    nombres:string;
    apellidos:string;
    telefono:string;
    email:string;
    direccion:string;   
    fechaingreso:Date;
    @IsOptional()
    idespecialidad:number;
}