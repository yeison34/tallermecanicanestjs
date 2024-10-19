import { MigrationInterface, QueryRunner } from "typeorm";

export class TerceraMigration1729196202154 implements MigrationInterface {
    name = 'TerceraMigration1729196202154'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tipo_vehiculo" DROP CONSTRAINT "PK_9e30757ab0494c0fbad47775c31"`);
        await queryRunner.query(`ALTER TABLE "tipo_vehiculo" DROP COLUMN "id_tipo"`);
        await queryRunner.query(`ALTER TABLE "tipo_vehiculo" DROP COLUMN "es_activo"`);
        await queryRunner.query(`ALTER TABLE "tipo_vehiculo" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tipo_vehiculo" ADD CONSTRAINT "PK_c612b4b7ab508c6d971df180c30" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "tipo_vehiculo" ADD "esactivo" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tipo_vehiculo" DROP COLUMN "esactivo"`);
        await queryRunner.query(`ALTER TABLE "tipo_vehiculo" DROP CONSTRAINT "PK_c612b4b7ab508c6d971df180c30"`);
        await queryRunner.query(`ALTER TABLE "tipo_vehiculo" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "tipo_vehiculo" ADD "es_activo" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "tipo_vehiculo" ADD "id_tipo" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tipo_vehiculo" ADD CONSTRAINT "PK_9e30757ab0494c0fbad47775c31" PRIMARY KEY ("id_tipo")`);
    }

}
