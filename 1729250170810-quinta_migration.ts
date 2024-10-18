import { MigrationInterface, QueryRunner } from "typeorm";

export class QuintaMigration1729250170810 implements MigrationInterface {
    name = 'QuintaMigration1729250170810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reparacion" ("id" SERIAL NOT NULL, "fechaingreso" TIMESTAMP NOT NULL DEFAULT now(), "vehiculoId" integer, "empleadoId" integer, CONSTRAINT "PK_1aef8f00a58c03237d209b38d05" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD "tipovehiculoId" integer`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD "clienteId" integer`);
        await queryRunner.query(`ALTER TABLE "reparacion" ADD CONSTRAINT "FK_c270e8e2f2fa93da1ed7ba13816" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reparacion" ADD CONSTRAINT "FK_6e3fa766f3e40266c96f819cd2a" FOREIGN KEY ("empleadoId") REFERENCES "empleado"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD CONSTRAINT "FK_b31dcd9d38b8d42e9086570a600" FOREIGN KEY ("tipovehiculoId") REFERENCES "tipo_vehiculo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehiculo" ADD CONSTRAINT "FK_6257e8a74ece5003f0eb9c02d97" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP CONSTRAINT "FK_6257e8a74ece5003f0eb9c02d97"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP CONSTRAINT "FK_b31dcd9d38b8d42e9086570a600"`);
        await queryRunner.query(`ALTER TABLE "reparacion" DROP CONSTRAINT "FK_6e3fa766f3e40266c96f819cd2a"`);
        await queryRunner.query(`ALTER TABLE "reparacion" DROP CONSTRAINT "FK_c270e8e2f2fa93da1ed7ba13816"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP COLUMN "clienteId"`);
        await queryRunner.query(`ALTER TABLE "vehiculo" DROP COLUMN "tipovehiculoId"`);
        await queryRunner.query(`DROP TABLE "reparacion"`);
    }

}
