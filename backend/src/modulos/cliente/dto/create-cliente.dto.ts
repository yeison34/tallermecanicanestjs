import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateClienteDto {
    @IsNotEmpty({ message: 'La cédula es obligatoria' })
    cedula: string;

    @IsNotEmpty({ message: 'Los nombres son obligatorios' })
    nombres: string;

    @IsNotEmpty({ message: 'Los apellidos son obligatorios' })
    apellidos: string;

    telefono?: string;

    @IsEmail({}, { message: 'El correo no es válido' })
    email: string;

    direccion?: string;
}
