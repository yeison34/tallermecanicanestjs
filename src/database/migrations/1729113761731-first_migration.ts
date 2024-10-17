import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1729113761731 implements MigrationInterface {
    name = 'FirstMigration1729113761731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cliente" ("id" SERIAL NOT NULL, "cedula" character varying NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "telefono" character varying NOT NULL, "email" character varying NOT NULL, "direccion" character varying NOT NULL, CONSTRAINT "UQ_746b02865d530423b3d06aecfd3" UNIQUE ("cedula"), CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cliente"`);
    }

}
