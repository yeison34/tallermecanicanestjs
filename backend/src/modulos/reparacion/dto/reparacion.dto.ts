import { IsOptional } from "class-validator";

export class ReparacionDto {
    id: number;
    @IsOptional()
    fechaingreso: Date;
    idvehiculo: number;
    idempleado: number;
}