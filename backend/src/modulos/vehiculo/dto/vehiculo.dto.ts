import { IsOptional } from "class-validator";

export class VehiculoDto{
    id:number;

    placa:string;

    modelo:string;

    marca:string;

    color:string;

    @IsOptional()
    idtipovehiculo:number;

    @IsOptional()
    idcliente:number;
}