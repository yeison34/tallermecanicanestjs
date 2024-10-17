import { MigrationInterface, QueryRunner } from "typeorm";

export class MigracionEspecialidades1729143379775 implements MigrationInterface {
    name = 'MigracionEspecialidades1729143379775'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "especialidad" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "sueldo" integer NOT NULL, "estado" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_aec2a5950913ac1bb4ac83ac3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cliente" ("id" SERIAL NOT NULL, "cedula" character varying NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "telefono" character varying NOT NULL, "email" character varying NOT NULL, "direccion" character varying NOT NULL, CONSTRAINT "UQ_746b02865d530423b3d06aecfd3" UNIQUE ("cedula"), CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "empleado" ("id" SERIAL NOT NULL, "cedula" character varying NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "telefono" character varying NOT NULL, "email" character varying NOT NULL, "direccion" character varying NOT NULL, "fechaingreso" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_d178acd320efd5300609842cb33" UNIQUE ("cedula"), CONSTRAINT "PK_d15e7688d5ed23e9fdb570b2e5d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "empleado"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
        await queryRunner.query(`DROP TABLE "especialidad"`);
    }

}
