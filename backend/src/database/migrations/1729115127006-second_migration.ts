import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigration1729115127006 implements MigrationInterface {
    name = 'SecondMigration1729115127006'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "empleado" ("id" SERIAL NOT NULL, "cedula" character varying NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "telefono" character varying NOT NULL, "email" character varying NOT NULL, "direccion" character varying NOT NULL, "fechaingreso" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_d178acd320efd5300609842cb33" UNIQUE ("cedula"), CONSTRAINT "PK_d15e7688d5ed23e9fdb570b2e5d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "empleado"`);
    }

}
