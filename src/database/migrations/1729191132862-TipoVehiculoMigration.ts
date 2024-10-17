import { MigrationInterface, QueryRunner } from "typeorm";

export class TipoVehiculoMigration1729191132862 implements MigrationInterface {
    name = 'TipoVehiculoMigration1729191132862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tipo_vehiculo" (
            "id_tipo" SERIAL NOT NULL, 
            "nombre" character varying NOT NULL, 
            "es_activo" boolean NOT NULL DEFAULT true, 
            CONSTRAINT "UQ_51e53c1376107c90a542bd90eb5" UNIQUE ("nombre"), 
            CONSTRAINT "PK_9e30757ab0494c0fbad47775c31" PRIMARY KEY ("id_tipo")
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`DROP TABLE "tipo_vehiculo"`);
    }
}
