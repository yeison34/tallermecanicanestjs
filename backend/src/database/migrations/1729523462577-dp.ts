import { MigrationInterface, QueryRunner } from "typeorm";

export class Dp1729523462577 implements MigrationInterface {
    name = 'Dp1729523462577'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "especialidad" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "sueldo" integer NOT NULL, "estado" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_aec2a5950913ac1bb4ac83ac3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "empleado" ("id" SERIAL NOT NULL, "cedula" character varying NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "telefono" character varying NOT NULL, "email" character varying NOT NULL, "direccion" character varying NOT NULL, "fechaingreso" TIMESTAMP NOT NULL DEFAULT now(), "especialidadId" integer, CONSTRAINT "UQ_d178acd320efd5300609842cb33" UNIQUE ("cedula"), CONSTRAINT "PK_d15e7688d5ed23e9fdb570b2e5d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cliente" ("id" SERIAL NOT NULL, "cedula" character varying NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "telefono" character varying NOT NULL, "email" character varying NOT NULL, "direccion" character varying NOT NULL, CONSTRAINT "UQ_746b02865d530423b3d06aecfd3" UNIQUE ("cedula"), CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tipo_vehiculo" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "esactivo" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_51e53c1376107c90a542bd90eb5" UNIQUE ("nombre"), CONSTRAINT "PK_c612b4b7ab508c6d971df180c30" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehiculo" ("id" SERIAL NOT NULL, "placa" character varying NOT NULL, "modelo" character varying NOT NULL, "marca" character varying NOT NULL, "color" character varying NOT NULL, "tipovehiculoId" integer, "clienteId" integer, CONSTRAINT "PK_79ad0f38366031fd4f2c1efdc62" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reparacion" ("id" SERIAL NOT NULL, "fechaingreso" TIMESTAMP NOT NULL DEFAULT now(), "vehiculoId" integer, "empleadoId" integer, CONSTRAINT "PK_1aef8f00a58c03237d209b38d05" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "FK_8e47a09111d5a946d391b277e54" FOREIGN KEY ("especialidadId") REFERENCES "especialidad"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD CONSTRAINT "FK_b31dcd9d38b8d42e9086570a600" FOREIGN KEY ("tipovehiculoId") REFERENCES "tipo_vehiculo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD CONSTRAINT "FK_6257e8a74ece5003f0eb9c02d97" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reparacion" ADD CONSTRAINT "FK_c270e8e2f2fa93da1ed7ba13816" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reparacion" ADD CONSTRAINT "FK_6e3fa766f3e40266c96f819cd2a" FOREIGN KEY ("empleadoId") REFERENCES "empleado"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reparacion" DROP CONSTRAINT "FK_6e3fa766f3e40266c96f819cd2a"`);
        await queryRunner.query(`ALTER TABLE "reparacion" DROP CONSTRAINT "FK_c270e8e2f2fa93da1ed7ba13816"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP CONSTRAINT "FK_6257e8a74ece5003f0eb9c02d97"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP CONSTRAINT "FK_b31dcd9d38b8d42e9086570a600"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "FK_8e47a09111d5a946d391b277e54"`);
        await queryRunner.query(`DROP TABLE "reparacion"`);
        await queryRunner.query(`DROP TABLE "vehiculo"`);
        await queryRunner.query(`DROP TABLE "tipo_vehiculo"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
        await queryRunner.query(`DROP TABLE "empleado"`);
        await queryRunner.query(`DROP TABLE "especialidad"`);
    }

}
