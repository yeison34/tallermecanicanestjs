import { MigrationInterface, QueryRunner } from "typeorm";

export class Migracionnueva1729293937249 implements MigrationInterface {
    name = 'Migracionnueva1729293937249'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleado" ADD "especialidadId" integer`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "FK_8e47a09111d5a946d391b277e54" FOREIGN KEY ("especialidadId") REFERENCES "especialidad"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "FK_8e47a09111d5a946d391b277e54"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "especialidadId"`);
    }

}
