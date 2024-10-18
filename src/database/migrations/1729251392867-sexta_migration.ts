import { MigrationInterface, QueryRunner } from "typeorm";

export class SextaMigration1729251392867 implements MigrationInterface {
    name = 'SextaMigration1729251392867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "especialidad" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "sueldo" integer NOT NULL, "estado" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_aec2a5950913ac1bb4ac83ac3c9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "especialidad"`);
    }

}
