import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1679591159804 implements MigrationInterface {
    name = 'InitialMigration1679591159804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "imageProfile" character varying(400)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "imageProfile"`);
    }

}
