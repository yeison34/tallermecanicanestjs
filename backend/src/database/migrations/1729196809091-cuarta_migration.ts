import { MigrationInterface, QueryRunner } from "typeorm";

export class CuartaMigration1729196809091 implements MigrationInterface {
    name = 'CuartaMigration1729196809091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehiculo" ("id" SERIAL NOT NULL, "placa" character varying NOT NULL, "modelo" character varying NOT NULL, "marca" character varying NOT NULL, "color" character varying NOT NULL, CONSTRAINT "PK_79ad0f38366031fd4f2c1efdc62" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehiculo"`);
    }

}
